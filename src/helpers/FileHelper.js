import ApiService from "@/services/ApiService.js";
import UserExperienceHelper from "@/store/helpers/UserExperienceHelper.js";
import store from "@/store";
export function uploadFiles(files) {
  var filesNotUpload = [];
  UserExperienceHelper.startLoading();
  let promiseArray = files.map(file =>
    ApiService.uploadFile(file)
      .then(status => {
        console.log(status);
        UserExperienceHelper.positiveNotify(
          file.name + " è stato caricato correttamente"
        );
      })
      .catch(err => {
        filesNotUpload.push(file);
        UserExperienceHelper.negativeNotify(err, "il file " + file.name);
      })
  );

  Promise.all(promiseArray).then(() => {
    store.dispatch("tourState/fetchInternalMedias");
    UserExperienceHelper.stopLoading();
  });
  return filesNotUpload;
}
