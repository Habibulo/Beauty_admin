console.log("Signup frontend javascript file");
$(function () {
  const fileTarget = $("#input-file");

  let fileName;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0];
      const fileType = uploadFile["type"];
      const validationType = ["image/jpg", "image/jpeg", "image/png"];

      if (!validationType.includes(fileType)) {
        alert("Only image/jpg, image/jpeg, image/png");
        return; // Stop further execution if file type is not valid
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile));
          $("#signup-changed-image")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        fileName = $(this)[0].files[0].name;
      }

      $(this).siblings(".upload-image").val(fileName);
    }
  });
});

function validateSignupForm() {
  const memberNick = $("#memberNick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $("#pass").val();
  const confirmPassword = $("#re_pass").val();

  // Checking if all required fields are filled
  if (
      memberNick.trim() === "" || 
      memberPhone.trim() === "" || 
      memberPassword.trim() === "" || 
      confirmPassword.trim() === ""
  ) {
      alert("Please fill in all required fields.");
      return false; // Prevent form submission
  }

  // Checking if passwords match
  if (memberPassword !== confirmPassword) {
      alert("The 'Repeat Password' field does not match your password.");
      return false; // Prevent form submission
  }

  return true; // Allow form submission if everything is correct

  // const memberImage = $(".member-image").get(0).files[0]
  // ? $(".member-image").get(0).files[0]?.name
  // : null;

  // if(!memberImage) {
  //     alert("Please insert restaurant image")
  //     return false
  // }
}
