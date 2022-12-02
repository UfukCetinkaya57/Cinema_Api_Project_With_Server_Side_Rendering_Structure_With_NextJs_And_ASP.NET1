using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entitites
{
    public class GetMovieById: IEntity
    {
        public bool adult { get; set; }
        public string backdrop_path { get; set; }
        public int budget { get; set; }
        public List<Genres> genres { get; set; }
        public string homepage { get; set; }
        public int id { get; set; }
        public string imdb_id { get; set; }
        public string original_language { get; set; }
        public string original_title { get; set; }
        public string overview { get; set; }
        public string popularity { get; set; }
        public List<ProductionCompanies> production_companies { get; set; }
        public List<ProductionCountries> production_countries { get; set; }
        public string release_date { get; set; }
        public long revenue { get; set; }
        public int runtime { get; set; }
        public List<SpokenLanguages> spoken_languages { get; set; }

        public string status { get; set; }
        public string tagline { get; set; }

        public string title { get; set; }

        public bool video { get; set; }
        public double vote_average { get; set; }
        public int vote_count { get; set; }
    }
}
