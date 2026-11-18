param(
    [Parameter(Mandatory=$true)][string]$Url,
    [Parameter(Mandatory=$true)][string]$Out,
    [int]$W = 1080,
    [int]$H = 1400
)

$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$prof = "C:\Users\user\AppData\Local\Temp\opencode\shotprof-" + [System.IO.Path]::GetRandomFileName().Substring(0,6)

& $edge --headless=new --disable-gpu --no-first-run --hide-scrollbars `
        --force-device-scale-factor=1 `
        "--user-data-dir=$prof" `
        "--window-size=$W,$H" `
        "--screenshot=`"$Out`"" $Url | Out-Null

$deadline = (Get-Date).AddSeconds(15)
while ((Get-Date) -lt $deadline) {
    if (Test-Path $Out) { Start-Sleep -Seconds 2; break }
    Start-Sleep -Milliseconds 500
}

if (Test-Path $Out) {
    Add-Type -AssemblyName System.Drawing
    $img = [System.Drawing.Image]::FromFile($Out)
    Write-Host ("OK {0}  {1}x{2}  {3:N0} KB" -f (Split-Path $Out -Leaf), $img.Width, $img.Height, ((Get-Item $Out).Length / 1kb))
    $img.Dispose()
} else {
    Write-Host "GAGAL screenshot"
    exit 1
}

try { Remove-Item $prof -Recurse -Force -ErrorAction SilentlyContinue } catch {}
