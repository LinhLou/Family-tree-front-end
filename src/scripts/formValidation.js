export function isInvalid(ele) {
  const eleClassList = ele.classList;
  if (!eleClassList.contains('is-invalid')) {
    eleClassList.add('is-invalid');
  }
  if (eleClassList.contains('is-valid')) {
    eleClassList.remove('is-valid');
  }
}

function isValid(ele) {
  const eleClassList = ele.classList;
  if (!eleClassList.contains('is-valid')) {
    eleClassList.add('is-valid');
  }
  if (eleClassList.contains('is-invalid')) {
    eleClassList.remove('is-invalid');
  }
}

export function clientValidationElement(checkedEle, targetedEle) {
  if (!checkedEle.checkValidity()) {
    isInvalid(checkedEle);
    isInvalid(targetedEle);
    return false;
  } else {
    isValid(checkedEle);
    isValid(targetedEle);
    return true;
  }
}



export function toggleStyleValidation(e, targetedEle) {
  //  check validation constantly when chaning input value 
  const eleClassList = targetedEle.classList;
  const checkedEle = e.target;
  if (eleClassList.contains('is-invalid') || eleClassList.contains('is-valid')) {
    clientValidationElement(checkedEle, targetedEle);
  }
}

export function serverValidationElement(checkedEle, targetedEle) {
  isInvalid(checkedEle);
  isInvalid(targetedEle);
}

export default clientValidationElement;