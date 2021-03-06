﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebAppResponsiveDesign.Controllers
{
    public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}

		public IActionResult Error()
		{
			return View();
		}

        public IActionResult Restaurants()
        {
            return View();
        }

        public IActionResult Cuisine()
        {
            return View();
        }

        public IActionResult Dishes()
        {
            return View();
        }

		public IActionResult Prices()
		{
			return View();
		}

		public IActionResult Location()
		{
			return View();
		}

		public IActionResult Reviews()
		{
			return View();
		}
    }
}
