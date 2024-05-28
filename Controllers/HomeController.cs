using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using WebApplication8.Models;
using MongoDB.Driver;

namespace WebApplication8.Controllers
{
    public class HomeController : Controller
    {


        public HomeController(ILogger<HomeController> logger)
        {

        }

        public IActionResult Index()
        {
            var username = HttpContext.Session.GetString("Username");
            ViewData["Username"] = username;
            return View();

        }


            public IActionResult A1()
            {
                return View();
            }
            public IActionResult Privacy()
            {
                return View();

            }
            public IActionResult A2()
            {
                return View();
            }
            public IActionResult B1()
            {
                return View();
            }
            public IActionResult B2()
            {
                return View();
            }
            public IActionResult C1()
            {
                return View();
            }
            public IActionResult C2()
            {
                return View();
            }


            [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
            public IActionResult Error()
            {
                return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
            }
        }
    }

