function display(value) 
{
        document.getElementById('output').value += value;
}

function clearDisplay()
{
        document.getElementById('output').value = "";
}

function calculate() 
{
        try 
        {
                let answer = document.getElementById('output').value;
                const result = eval(answer);

                document.getElementById('output').value = result;

        } catch (error) 
        {
                document.getElementById('output').value = 'Error';
        }
}