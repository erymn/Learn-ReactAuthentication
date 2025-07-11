using LearnReactAuthWithDotNet.Models;
using LearnReactAuthWithDotNet.ReactAuthContext;

namespace LearnReactAuthWithDotNet.Repository;

public class EmployeeRepository : IEmployeeRepository
{
    private MyContext _context;

    public EmployeeRepository(MyContext context)
    {
        _context = context;
    }

    public List<Employee> GetEmployees()
    {
        return _context.Employees.ToList();
    }

    public Employee GetEmployee(int id)
    {
        return _context.Employees.Find(id)!;
    }

    public bool SaveEmployee(Employee employee)
    {
        _context.Employees.Add(employee);
        return _context.SaveChanges() > 0;
    }

    public Employee GetEmployeeByName(string name)
    {
        return _context.Employees.FirstOrDefault(p => p.Name == name)!;
    }
}