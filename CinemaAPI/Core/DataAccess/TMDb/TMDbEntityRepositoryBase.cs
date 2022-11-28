using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Entities.Concrete;
using Core.Entitites;
using System.Drawing;
using System.Net;
using System.Drawing.Imaging;

namespace Core.DataAccess
{
    public class TMDbEntityRepositoryBase<TEntity> : IEntityRepository<TEntity>
        where TEntity : class, IEntity, new()
    {
        string _apiKey = "6304998478fcc60c7001258d8db1f701";
        int _page = 1;

        public async Task<string> GetListByUpcomingMovie()
        {
            string query = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + _apiKey + "&language=tr-TR&page=1";
            List<GetUpcomingMovieList> resultContent = new List<GetUpcomingMovieList>();//GetUpcomingMovieList
            using (var client = new HttpClient())
            {
                var result = await client.GetAsync(query);
                result.EnsureSuccessStatusCode();
                string resultContentString = await result.Content.ReadAsStringAsync();

                var movie = JsonConvert.DeserializeObject<GetUpcomingMovieList>(resultContentString);
                resultContent.Add(movie);
            }

            string json = JsonConvert.SerializeObject(resultContent);
            return json;
        }

        // upcoming https://api.themoviedb.org/3/movie/upcoming?api_key=6304998478fcc60c7001258d8db1f701&language=tr-TR&page=1
        public async Task<string> GetListBySimilarMovie(int movieId)
        {
            string query = "https://api.themoviedb.org/3/movie/" + movieId + "/similar?api_key=" + _apiKey + "&language=tr-TR&page=1";
            List<GetMovieByIdList> resultContent = new List<GetMovieByIdList>(); //GetMovieByIdList
            using (var client = new HttpClient())
            {
                var result = await client.GetAsync(query);
                result.EnsureSuccessStatusCode();
                string resultContentString = await result.Content.ReadAsStringAsync();

                var movie = JsonConvert.DeserializeObject<GetMovieByIdList>(resultContentString);
                resultContent.Add(movie);
            }

            string json = JsonConvert.SerializeObject(resultContent);
            return json;
        }

        public async Task<string> GetMovieById(int movieId)
        {
            string query = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=" + _apiKey + "&language=tr-TR";
            using (var client = new HttpClient())
            {
                var result = await client.GetAsync(query);
                result.EnsureSuccessStatusCode();
                string resultContentString = await result.Content.ReadAsStringAsync();

                var movie = JsonConvert.DeserializeObject<GetMovieById>(resultContentString); //GetMovieById

                string json = JsonConvert.SerializeObject(movie);
                return json;

            }

        }

        public async Task<string> GetMoviesBySearchKey(string searchKey)
        {
            bool isTheCycleOver = true;
            List<GetMovies> resultContent = new List<GetMovies>(); //GetMovie

            while (isTheCycleOver)
            {
                string query = "https://api.themoviedb.org/3/search/movie?api_key=" + _apiKey + "&language=tr-TR&query=" + searchKey + "&page=" + 1 + "&include_adult=false";

                //Result content string nedir araştır bakalım?
                using (var client = new HttpClient())
                {
                    var result = await client.GetAsync(query);
                    result.EnsureSuccessStatusCode();
                    string resultContentString = await result.Content.ReadAsStringAsync();

                    var movie = JsonConvert.DeserializeObject<GetMovies>(resultContentString);
                    resultContent.Add(movie);

                    _page += 1;
                    if (_page > 2)
                    {
                       isTheCycleOver = false;
                    }
                }

            }
            string json = JsonConvert.SerializeObject(resultContent);
            return json;
        }
    }

}
