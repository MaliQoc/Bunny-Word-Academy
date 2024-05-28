using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using WebApplication8.Models;
using System.Threading.Tasks;

namespace WebApplication8.Controllers
{
    public class MessageController : Controller
    {
        private readonly IMongoCollection<Message> _messages;

        public MessageController()
        {
            var client = new MongoClient("mongodb://localhost:27017");
            var database = client.GetDatabase("UserDB");
            _messages = database.GetCollection<Message>("Messages");
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Message message)
        {
            if (ModelState.IsValid)
            {
                await _messages.InsertOneAsync(message);
                return RedirectToAction("Index", "Home");
            }
            return View(message);
        }
    }
}
