using System.Net;
using System.Net.Http.Headers;
using Business.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace WebApplication7.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private IMovieService _movieService;

        public MovieController(IMovieService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet("getListMovieBySearchKey")]
        public Task<string> getListMovieBySearchKey(string searchKey)
        {
            var result = _movieService.GetListMovieBySearchKey(searchKey);
            return _movieService.GetListMovieBySearchKey(searchKey);
        }

        [HttpGet("getListBySimilirMovie")]
        public Task<string> getListBySimilarMovie(int movieId)
        {
            return _movieService.GetListBySimilarMovie(movieId);
        }


        [HttpGet("getListByUpcomingMovie")]
        public Task<string> getListByUpcomingMovie()
        {
            return _movieService.GetListByUpcomingMovie();
        }

        [HttpGet("getMovieById")]
        public Task<string> getMovieById(int movieId)
        {
            return _movieService.GetMovieById(movieId);
        }
    }
}