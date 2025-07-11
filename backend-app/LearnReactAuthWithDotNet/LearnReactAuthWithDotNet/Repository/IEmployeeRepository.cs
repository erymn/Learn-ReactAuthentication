using LearnReactAuthWithDotNet.Models;

namespace LearnReactAuthWithDotNet.Repository;

public interface IEmployeeRepository
{
    List<Employee> GetEmployees();
    Employee GetEmployee(int id);
    bool SaveEmployee(Employee employee);
    Employee GetEmployeeByName(string name);
}