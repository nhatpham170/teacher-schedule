/* ════════════════════════════════════════════════
   TKB CONFIG — Chỉnh sửa file này để thay đổi
   thông tin mặc định mà không cần đụng code chính
   ════════════════════════════════════════════════ */

window.TKB_CONFIG = {

  /* ── Thông tin trường ── */
  school: 'THPT Quang Trung',
  gv:     'Bùi Linh Hạnh',
  mon:    'Kinh Tế & Pháp Luật',
  nam:    '2026',

  /* ── Thời gian ── */
  sang:     '07:15',   // Giờ bắt đầu buổi sáng
  chieu:    '13:00',   // Giờ bắt đầu buổi chiều
  tietLen:  45,        // Độ dài mỗi tiết (phút)
  breakMin: 5,         // Không dùng trực tiếp (giữ tương thích)

  // Nghỉ giữa các tiết buổi sáng (phút) — trước tiết 2,3,4,5
  amBreaks: [5, 10, 10, 5],
  // Nghỉ giữa các tiết buổi chiều (phút) — trước tiết 7,8,9,10
  pmBreaks: [5, 10, 10, 5],

  /* ── Thời khóa biểu ──
     Mỗi tiết là mảng 5 phần tử theo thứ tự: [T2, T3, T4, T5, T6]
     Để trống '' hoặc 'NGHỈ' nếu không có lớp                      */
  sched: {
     1: ['NGHỈ', 'NGHỈ',        '12D2-GDKTPL', '12D2-GDKTPL', 'NGHỈ'],
     2: ['NGHỈ', 'NGHỈ',        '12D3-GDKTPL', 'NGHỈ',        'NGHỈ'],
     3: ['NGHỈ', '12D3-GDKTPL', '12D4-GDKTPL', '12D1-GDKTPL', 'NGHỈ'],
     4: ['NGHỈ', '12D1-GDKTPL', 'NGHỈ',        '12D2-GDKTPL', 'NGHỈ'],
     5: ['NGHỈ', 'NGHỈ',        'NGHỈ',        'NGHỈ',        'NGHỈ'],
     6: ['NGHỈ', 'NGHỈ',        'NGHỈ',        '10D5',        'NGHỈ'],
     7: ['12A1-HĐTN', '10D1-GDKTPL', 'NGHỈ',   '12A2-HĐTN',   'NGHỈ'],
     8: ['12A1-HĐTN', '10D5-GDKTPL', 'NGHỈ',   '12A2-HDTN',   'NGHỈ'],
     9: ['NGHỈ', '10D1-GDKTPL', 'NGHỈ',        'NGHỈ',        'NGHỈ'],
    10: ['NGHỈ', 'NGHỈ',        'NGHỈ',        'NGHỈ',        'NGHỈ'],
  },

  headerHidden: false,
};
