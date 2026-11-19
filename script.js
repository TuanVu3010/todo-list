// 1. Lấy các phần tử cần dùng từ DOM
const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// 2. Hàm thêm một task mới vào danh sách
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;      // textContent: hiện đúng chữ, an toàn với ký tự như <b>
  taskList.appendChild(li);   // đưa task lên web
}

// 3. Bắt sự kiện submit của form (bấm nút Thêm hoặc nhấn Enter)
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();               // chặn trình duyệt tải lại trang

  const text = taskInput.value.trim();  // đọc giá trị input, bỏ dấu cách thừa

  if (text === "") {                    // trống thì không thêm
    taskInput.focus();
    return;
  }

  addTask(text);
  taskInput.value = "";                 // xóa ô nhập để gõ tiếp
  taskInput.focus();
});