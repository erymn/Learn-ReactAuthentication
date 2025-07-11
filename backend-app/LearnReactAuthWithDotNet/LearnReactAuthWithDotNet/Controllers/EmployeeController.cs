using LearnReactAuthWithDotNet.Models;
using LearnReactAuthWithDotNet.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace LearnReactAuthWithDotNet.Controllers;

[ApiController]
[Route("api/[controller]")]
[EnableCors("AllowAll")]
public class EmployeeController : ControllerBase
{
    private readonly IEmployeeRepository _repository;

    public EmployeeController(IEmployeeRepository repository)
    {
        _repository = repository;
    }
    
    [HttpPost]
    [Route("registration")]
    public IActionResult Post([FromBody] Employee employee)
    {
        try
        {
            _repository.SaveEmployee(employee);
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
        
        return  Ok("Successfully saved");
    }

    [HttpPost]
    [Route("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
        try
        {
            Employee employee = _repository.GetEmployeeByName(login.Name);
            if(employee.PhoneNo == login.PhoneNo)
                return Ok("Login successfully.");
            else
            {
                var custRespMsg = new
                    { message = "Name or the phone number does not match or exist. Please enter correct data." };
                return StatusCode(StatusCodes.Status404NotFound, custRespMsg);
            }
        }
        catch (Exception e)
        {
            return BadRequest(e);
        }
    }
}