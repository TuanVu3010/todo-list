// ===== PHẦN 1: LẤY CÁC PHẦN TỬ TỪ HTML =====

// khai báo hằng số todoForm, có giá trị là thẻ <form> có id "todoForm"
// tìm phần tử trong HTML có id trùng với chuỗi truyền vào
const todoForm = document.getElementById("todoForm");

// khai báo hằng số taskInput, có giá trị là ô <input> có id "taskInput"
// đây là ô để user gõ nội dung công việc
const taskInput = document.getElementById("taskInput");

// khai báo hằng số taskList, có giá trị là thẻ <ul> có id "taskList"
// đây là nơi hiển thị danh sách công việc
const taskList = document.getElementById("taskList");


// ===== PHẦN 2: HÀM THÊM CÔNG VIỆC =====

// khai báo hàm addTask
// hàm này xử lý: tạo 1 thẻ <li> mới và đưa lên danh sách trên trang
// truy vào: tham số text (nội dung công việc user đã gõ)
// trả về kết quả: không trả về gì, chỉ thay đổi giao diện
function addTask(text) {
  // khai báo hằng số li, có giá trị là 1 thẻ <li> mới tạo
  // lúc này thẻ <li> mới nằm trong bộ nhớ, chưa hiện trên trang
  const li = document.createElement("li");

  // gán giá trị li.textContent là text
  // dùng textContent (không dùng innerHTML) để hiện đúng chữ, an toàn với ký tự như <b>
  li.textContent = text;

  // gắn thẻ li vào cuối danh sách taskList
  // bước này công việc mới thực sự hiện lên trang
  taskList.appendChild(li);
}


// ===== PHẦN 3: XỬ LÝ KHI USER SUBMIT FORM =====

// khai báo hàm xử lý sự kiện submit (hàm không tên)
// hàm này xử lý: đọc nội dung ở ô input, kiểm tra, rồi thêm công việc vào danh sách
// truy vào: tham số event (thông tin về sự kiện submit)
// trả về kết quả: không trả về gì
todoForm.addEventListener("submit", function (event) {
  // chặn hành vi mặc định của form là tải lại trang
  event.preventDefault();

  // khai báo hằng số text, có giá trị là nội dung ô input sau khi bỏ dấu cách thừa
  // ví dụ: "  học bài  " -> "học bài"
  const text = taskInput.value.trim();

  // kiểm tra biến text: nếu text là chuỗi rỗng thì không thêm công việc
  if (text === "") {
    // đưa con trỏ về lại ô input để user gõ tiếp
    taskInput.focus();

    // thoát khỏi hàm ngay, các dòng bên dưới không chạy
    return;
  }

  // nếu text hợp lệ: gọi hàm addTask để thêm công việc lên danh sách
  addTask(text);

  // gán giá trị taskInput.value là chuỗi rỗng, để xóa ô nhập
  taskInput.value = "";

  // đưa con trỏ về ô input để user gõ công việc tiếp theo
  taskInput.focus();
});

// thực hiện hàm xử lý submit, khi mà user bấm nút "Thêm" hoặc nhấn Enter trong ô input
// (không cần gọi thủ công, vì addEventListener đã đăng ký sẵn)