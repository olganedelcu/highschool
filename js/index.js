    function display(e) {
      document.getElementById('matematics').innerHTML = 'Matematicas: ' + e.target.value
    }

    function validate(value, field_name){
        if(value > 10 || value < 0){
          document.getElementById(field_name).classList.remove('valid')
          document.getElementById(field_name).classList.add('error')
          document.getElementById(field_name + '-error').innerHTML = 'Valor entre 0 y 10!'
        }else{
          document.getElementById(field_name).classList.remove('error')
          document.getElementById(field_name).classList.add('valid')
          document.getElementById(field_name + '-error').innerHTML = ''
        }
    }

    function calculate(e) {
      var math = Number(document.getElementById('math').value || 10)
      validate(math, 'math')
      var social = Number(document.getElementById('social').value || 10)
      validate(social, 'social')
      var spanish = Number(document.getElementById('spanish').value || 10)
      validate(spanish,'spanish')
      var english = Number(document.getElementById('english').value || 10)
      validate(english,'english')
      var fisics = Number(document.getElementById('fisics').value || 10)
      validate(fisics,'fisics')
      var chemisty = Number(document.getElementById('chemisty').value || 10)
      validate(chemisty,'chemisty')
      var graphics = Number(document.getElementById('graphics').value || 10)
      validate(graphics,'graphics')
      var average = (math + social + spanish + english + fisics + chemisty + graphics) / 7
      var selectividad = average + 4

      document.getElementById('average').innerHTML = average.toFixed(2)
      document.getElementById('selectividad').innerHTML = selectividad.toFixed(2)
    }
