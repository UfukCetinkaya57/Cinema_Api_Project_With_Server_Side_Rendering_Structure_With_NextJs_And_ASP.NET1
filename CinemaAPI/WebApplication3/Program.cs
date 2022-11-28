using Autofac;
using Autofac.Extensions.DependencyInjection;
using Business.DependecyResolvers.Autofac;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options => {
    options.AddPolicy("CORSPolicy", builder => {
         builder
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowAnyOrigin();
    });
});
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());
builder.Host.ConfigureContainer<ContainerBuilder>(builder => builder.RegisterModule(new AutofacBusinessModule()));
// Add services to the container.

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(swaggerGenOptions => {
    swaggerGenOptions.SwaggerDoc("v1", new OpenApiInfo{ Title = "ASP.NET react", Version = "v1"});
});

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI(swaggerUIOptionsa => {
    swaggerUIOptionsa.DocumentTitle = "ASP.NET REACT TUTORÝAL";
    swaggerUIOptionsa.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API Serving a very simple post model");
    swaggerUIOptionsa.RoutePrefix= string.Empty;
   
});

app.UseHttpsRedirection();

app.UseCors("CORSPolicy");

app.UseAuthorization();
app.MapControllers();

app.Run();
