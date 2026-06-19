# PowerShell script to run the Vocalearn project in debug/dev mode
# Usage: .\run.ps1

Write-Host "=== Khởi động dự án Vocalearn ===" -ForegroundColor Cyan

# 1. Khởi động PostgreSQL DB bằng Docker
Write-Host "1. Đang khởi chạy các container Docker..." -ForegroundColor Yellow
docker-compose up -d
if ($LASTEXITCODE -ne 0) {
    Write-Host "Cảnh báo: docker-compose up thất bại. Hãy đảm bảo Docker Desktop đang chạy!" -ForegroundColor Red
} else {
    Write-Host "Docker containers đã được khởi chạy thành công." -ForegroundColor Green
}

# Tìm môi trường ảo Python (Virtual Environment)
$VenvPath = ""
$VenvLocations = @(
    "backend\\venv",
    "backend\\.venv",
    "venv",
    ".venv"
)

foreach ($loc in $VenvLocations) {
    if (Test-Path "$loc\\Scripts\\Activate.ps1") {
        $VenvPath = Resolve-Path "$loc"
        break
    }
}

# Chuẩn bị câu lệnh chạy Backend Django
$BackendCmd = ""
if ($VenvPath) {
    Write-Host "Tìm thấy môi trường ảo Python tại: $VenvPath" -ForegroundColor Green
    $BackendCmd = "cd backend; & '$VenvPath\\Scripts\\Activate.ps1'; python manage.py runserver"
} else {
    Write-Host "Không tìm thấy môi trường ảo Python. Sử dụng Python hệ thống." -ForegroundColor Yellow
    $BackendCmd = "cd backend; python manage.py runserver"
}

# Chuẩn bị câu lệnh chạy Frontend Angular
$FrontendCmd = "cd frontend; npm start"

# 2. Khởi chạy Django Backend trong cửa sổ PowerShell mới
Write-Host "2. Đang khởi chạy Django Backend trong cửa sổ mới..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "$BackendCmd"

# 3. Khởi chạy Angular Frontend trong cửa sổ PowerShell mới
Write-Host "3. Đang khởi chạy Angular Frontend trong cửa sổ mới..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "$FrontendCmd"

Write-Host "=== Tất cả dịch vụ đã được khởi chạy! ===" -ForegroundColor Green
Write-Host "- Database (PostgreSQL): localhost:5432" -ForegroundColor Gray
Write-Host "- Backend (Django API):  http://127.0.0.1:8000" -ForegroundColor Gray
Write-Host "- Frontend (Angular):    http://localhost:4200" -ForegroundColor Gray
