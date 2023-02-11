import { h } from "vue";
import { toast } from "vue3-toastify";
import MessageToast from "../components/MessageToast.vue";

const renderToast = ({
  type = "info",
  message,
}: {
  type: "success" | "error" | "info";
  message: string;
}) => {
  const notify = toast[type];

  notify(({ toastProps }) =>
    h(MessageToast as any, {
      message,
      toastProps,
    })
  );
};

export default renderToast;
