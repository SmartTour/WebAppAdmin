import { QSpinnerGears, QSpinnerBall, Loading, Notify } from "quasar";
export default {
  startLoading() {
    Loading.show();
  },
  startLoadingData() {
    Loading.show({
      spinner: QSpinnerGears
    });
  },
  startLoadingLogin() {
    Loading.show({
      spinner: QSpinnerBall
    });
  },
  stopLoading() {
    Loading.hide();
  },
  positiveNotify(message) {
    Notify.create({
      type: "positive",
      message: message
    });
  },
  negativeNotify(err, entity) {
    let errorMessage = "";

    if (err.response) {
      if (err.response.data.message) errorMessage = err.response.data.message;
      else errorMessage = err.toString();
    } else
      errorMessage = "server al momento non disponibile per caricare " + entity;

    Notify.create({
      type: "negative",
      message: errorMessage
    });
  }
};
