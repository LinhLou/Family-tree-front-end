function isInvalid(eleRef) {
  const eleClassList = eleRef.current.classList;
  if (!eleClassList.contains('is-invalid')) {
    eleClassList.add('is-invalid');
  }
  if (eleClassList.contains('is-valid')) {
    eleClassList.remove('is-valid');
  }
}

function isValid(eleRef) {
  const eleClassList = eleRef.current.classList;
  if (!eleClassList.contains('is-valid')) {
    eleClassList.add('is-valid');
  }
  if (eleClassList.contains('is-invalid')) {
    eleClassList.remove('is-invalid');
  }
}

export function toggleStyleValidation(e, targetedEleRef) {
  const eleClassList = targetedEleRef.current.classList;
  if (eleClassList.contains('is-invalid') || eleClassList.contains('is-valid')) {
    if (!e.target.checkValidity()) {
      isInvalid(targetedEleRef);
    } else {
      isValid(targetedEleRef);
    }
  }
}


function checkValidationElement(checkedEleRef, targetedEleRef) {
  if (!checkedEleRef.current.checkValidity()) {
    isInvalid(targetedEleRef);
  } else {
    isValid(targetedEleRef);
  }
}

export default checkValidationElement;