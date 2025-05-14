let form=document.getElementById("form")
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      let name=document.getElementById("nameInput").value;
      let branch=document.getElementById("branch").value;
      let addmission=document.getElementById("addmission").value;
      let dob=document.getElementById("dob").value;
      let blood=document.getElementById("blood").value;
      let hostle=document.getElementById("hostle").value;
      let date=document.getElementById("date").value;
      let image=document.getElementById("image");

      // value assigned
      document.getElementById("name_input").innerText=name;
      document.getElementById("name_branch").innerText=branch;
      document.getElementById("detail_addmission").innerText+=addmission
      document.getElementById("detail_dob").innerText+=dob;
      document.getElementById("detail_blood").innerText+=blood;
      document.getElementById("detail_hostle").innerText+=hostle;
      document.getElementById("detail_validity").innerText+=date;
      let imageDisplay=document.getElementById("imageDisplay")
      
      const file = image.files[0];
      // console.log(file)
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageDisplay.src = e.target.result;
            imageDisplay.style.display = 'block'; // make it visible
        };
        reader.readAsDataURL(file); // convert to base64 and display
    }


      // display
      let container=document.getElementById("container")
      container.style.display="block"
      let fieldset=document.getElementById("fieldset")
      fieldset.style.display="none"
      // console.log(container)
    })