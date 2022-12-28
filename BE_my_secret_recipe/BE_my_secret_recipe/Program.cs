using BE_my_secret_recipe.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// 啟用 CORS (跨原始來源要求)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AnotherPolicy",
        policy =>
        {
            policy.WithOrigins("http://localhost:8080")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// DI DB
var configuration = new ConfigurationBuilder()
            .AddJsonFile($"appsettings.json");
var config = configuration.Build();
builder.Services.AddDbContext<RecipeDbContext>(options => {
    options.UseSqlServer(config.GetConnectionString("RecipeDb"));
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseStaticFiles(); // open wwwroot for frontend

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
