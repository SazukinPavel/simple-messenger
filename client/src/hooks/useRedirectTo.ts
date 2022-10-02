import { useRouter } from "vue-router";
import { watchEffect } from "vue";

export default function (logick: boolean, to = "/") {
  const router = useRouter();

  watchEffect(() => {
    if (logick) {
      router.push(to);
    }
  });
}
