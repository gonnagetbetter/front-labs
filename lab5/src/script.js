"use strcit";

const submitButton = document.getElementById("submitButton");

const regExp = [
  /^[А-ЯІЇЄҐ]{6} [А-ЯІЇЄҐ]{1}.[А-ЯІЇЄҐ]{1}\.$/,
  /^[А-ЯІЄ]{2}-[0-9]{2}$/,
  /^(\([0-9]{3}\))-([0-9]{3})-([0-9]{2})-([0-9]{2})$/,
  /^м. [0-9]{6}$/,
  /^[a-z]{6}@[a-z]{5}.com$/,
];

submitButton.onclick = () => {
  let errors = 0;

  const form = {
    fullName: document.getElementById("fullNameInput"),
    groupId: document.getElementById("groupIdInput"),
    phoneNumber: document.getElementById("phoneNumberInput"),
    address: document.getElementById("addressInput"),
    eMail: document.getElementById("eMailInput"),
  };

  if (!regExp[0].test(form.fullName.value)) {
    form.fullName.style.border = "3px solid red";
    errors++;
  } else form.fullName.style.border = "3px solid green";

  if (!regExp[1].test(form.groupId.value)) {
    form.groupId.style.border = "3px solid red";
    errors++;
  } else form.groupId.style.border = "3px solid green";

  if (!regExp[2].test(form.phoneNumber.value)) {
    form.phoneNumber.style.border = "3px solid red";
    errors++;
  } else form.phoneNumber.style.border = "3px solid green";

  if (!regExp[3].test(form.address.value)) {
    form.address.style.border = "3px solid red";
    errors++;
  } else form.address.style.border = "3px solid green";

  if (!regExp[4].test(form.eMail.value)) {
    form.eMail.style.border = "3px solid red";
    errors++;
  } else form.eMail.style.border = "3px solid green";

  if (errors === 0) {
    alert(
      "Введені дані" +
        "\nПІБ: " +
        form.fullName.value +
        "\nГрупа: " +
        form.groupId.value +
        "\nНомер телефону: " +
        form.phoneNumber.value +
        "\nАдреса: " +
        form.address.value +
        "\nЕлектронна пошта: " +
        form.eMail.value
    );
  }
};
