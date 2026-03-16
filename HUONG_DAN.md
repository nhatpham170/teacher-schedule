# 📅 TKB App – Hướng dẫn deploy

## Cấu trúc thư mục
```
tkb-app/
├── index.html     ← App chính
├── manifest.json  ← PWA metadata
├── sw.js          ← Service Worker (cache offline)
├── icon-192.png   ← Icon app
└── icon-512.png   ← Icon app lớn
```

---

## 🚀 Deploy lên GitHub Pages (miễn phí, 5 phút)

### Bước 1 — Tạo tài khoản GitHub
- Vào **github.com** → Sign up (nếu chưa có)
- Xác nhận email

### Bước 2 — Tạo repository mới
- Nhấn nút **+** góc trên phải → **New repository**
- Repository name: `tkb` (hoặc tên bất kỳ)
- Chọn **Public**
- Nhấn **Create repository**

### Bước 3 — Upload file
- Trong trang repository vừa tạo, nhấn **uploading an existing file**
- Kéo thả TẤT CẢ 5 file trong thư mục `tkb-app/` vào
- Commit message: `Initial upload`
- Nhấn **Commit changes**

### Bước 4 — Bật GitHub Pages
- Vào **Settings** (tab trên cùng của repo)
- Tìm mục **Pages** ở menu trái
- Source: chọn **Deploy from a branch**
- Branch: **main** → folder: **/ (root)**
- Nhấn **Save**

### Bước 5 — Lấy URL
- Sau 1–2 phút, quay lại **Settings → Pages**
- Sẽ thấy URL dạng: `https://[username].github.io/tkb`
- ✅ **Đây là link app của bạn!**

---

## 📱 Cài lên iPhone (iOS)

1. Mở link `https://[username].github.io/tkb` bằng **Safari**
2. Nhấn nút **Chia sẻ** (↑) ở thanh dưới
3. Chọn **"Thêm vào màn hình chính"**
4. Đặt tên → nhấn **Thêm**
5. App xuất hiện trên màn hình chính, mở full màn hình không có Safari

## 🤖 Cài lên Android

1. Mở link bằng **Chrome**
2. Chrome tự hỏi **"Thêm TKB vào màn hình chính?"** → nhấn **Cài đặt**
3. Hoặc: nhấn menu ⋮ → **Thêm vào màn hình chính**

---

## 🔄 Khi muốn cập nhật lịch/nội dung

1. Chỉnh sửa `index.html`
2. Mở GitHub repo → click vào file `index.html` → nhấn ✏️ Edit
3. Dán nội dung mới vào → **Commit changes**
4. Tăng số version trong `sw.js`: đổi `tkb-v1` thành `tkb-v2`
5. GitHub tự deploy sau ~1 phút

---

## ✅ Tính năng sau khi cài

| Tính năng | Trạng thái |
|-----------|-----------|
| Mở không cần mạng (offline) | ✅ Service Worker cache |
| Dữ liệu lưu vĩnh viễn | ✅ IndexedDB |
| Full màn hình không có Safari | ✅ Standalone mode |
| Đồng hồ thời gian thực | ✅ |
| Tự động nhận diện tiết đang dạy | ✅ |
| Timeline theo ngày | ✅ |
| Cài đặt lịch/giờ/thông tin | ✅ |
