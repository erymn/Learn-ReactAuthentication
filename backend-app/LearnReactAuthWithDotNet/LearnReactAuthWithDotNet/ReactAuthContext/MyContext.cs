using LearnReactAuthWithDotNet.Models;
using Microsoft.EntityFrameworkCore;

namespace LearnReactAuthWithDotNet.ReactAuthContext;

public class MyContext : DbContext
{
    public MyContext(DbContextOptions<MyContext> options) : base(options) { }

    // Define your DbSets here
    public DbSet<Employee> Employees { get; set; }
}