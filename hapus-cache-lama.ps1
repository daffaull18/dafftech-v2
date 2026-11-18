# Hapus cache profil browser + folder DAFFTECH lama di Temp\opencode
# (semuanya sudah ter-copy ke OneDrive\Desktop\project Dinzz)
$ErrorActionPreference = "Continue"
$old = "C:\Users\user\AppData\Local\Temp\opencode"

if (-not (Test-Path $old)) { Write-Host "Folder lama sudah tidak ada."; exit 0 }

$targets = @()

# 1. profil browser (cache screenshot) -> pola nama
$targets += Get-ChildItem $old -Directory -Force |
    Where-Object { $_.Name -match '^(cdp|chr|cr|edg|edge|prof|postprof|shotprof)' }

# 2. folder project DAFFTECH (sudah ter-copy)
foreach ($n in @("dafftech-v2","htmltest","shots","site","posters","frames")) {
    $p = Join-Path $old $n
    if (Test-Path $p) { $targets += Get-Item $p }
}

# 3. backup git bundle (sudah ter-copy)
$targets += Get-ChildItem $old -File -Filter *.bundle -Force

$targets = $targets | Sort-Object FullName -Unique

$sum = 0
foreach ($t in $targets) {
    if ($t.PSIsContainer) {
        $sum += (Get-ChildItem $t.FullName -Recurse -File -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum
    } else {
        $sum += $t.Length
    }
}
Write-Host ("TARGET : " + $targets.Count + " item, " + [Math]::Round($sum/1GB,2) + " GB")
Write-Host "-------------------------------------------"

$freed = 0
$ok = 0
$fail = 0
foreach ($t in $targets) {
    $sz = if ($t.PSIsContainer) {
        (Get-ChildItem $t.FullName -Recurse -File -Force -ErrorAction SilentlyContinue | Measure-Object Length -Sum).Sum
    } else { $t.Length }
    try {
        Remove-Item $t.FullName -Recurse -Force -ErrorAction Stop
        $freed += $sz; $ok++
        Write-Host ("HAPUS " + $t.Name)
    } catch {
        $fail++
        Write-Host ("GAGAL " + $t.Name + " :: " + $_.Exception.Message)
    }
}

Write-Host "-------------------------------------------"
Write-Host ("Berhasil : " + $ok + "  gagal: " + $fail + "  dilepas: " + [Math]::Round($freed/1GB,2) + " GB")

# sisa yang TIDAK disentuh (project lain)
Write-Host ""
Write-Host "SISA (project lain, tidak dihapus):"
Get-ChildItem $old -Force -ErrorAction SilentlyContinue | ForEach-Object { "  - " + $_.Name }
