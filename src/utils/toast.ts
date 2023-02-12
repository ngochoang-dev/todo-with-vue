import { h } from "vue";
import { toast } from "vue3-toastify";
import get from "lodash.get";
import MessageToast from "../components/MessageToast.vue";

const toastMessage = {
  register: {
    success: "Thành công!\n Hãy đăng nhập với tài khoản đã tạo.",
    error: "Thất bại!\n Hãy thử lại với tên khác.",
  },
  login: {
    success: "Thành công!",
    error: "Thất bại!\n Vui lòng thử lại sau.",
  },
  create: {
    success: "Thành công!\n Công việc của bạn đã được tạo.",
    error: "Thất bại!\n Có lỗi xảy ra vui lòng thử lại.",
  },
  delete: {
    success: "Thành công!\n Công việc của bạn đã được xóa.",
    error: "Thất bại!\n Có lỗi xảy ra vui lòng thử lại.",
  },
  todo: {
    notFound: "Thất bại!\n Không tìm thấy công việc.",
  },
};

const renderToast = ({
  type = "info",
  path,
}: {
  type: "success" | "error" | "info";
  path?: string[];
}) => {
  const notify = toast[type];

  const message = get(toastMessage, path);

  notify(({ toastProps }) =>
    h(MessageToast as any, {
      message,
      toastProps,
    })
  );
};

export default renderToast;
