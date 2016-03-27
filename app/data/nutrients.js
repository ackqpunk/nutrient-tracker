define(function(require){
    
    return {
        nutrients
    }
    
    var nutrients = [
  {
    "ahod_name": "Alpha-linoleic Acid",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Arachidonic Acid",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Arginine",
    "unit": "g",
    "nutrient_id": 511,
    "ndb_name": 0
  },
  {
    "ahod_name": "Biotin",
    "unit": 0,
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Calcium",
    "unit": "g",
    "nutrient_id": 301,
    "ndb_name": 0
  },
  {
    "ahod_name": "Chloride",
    "unit": "mg",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Cholecalciferol",
    "unit": "ug",
    "nutrient_id": 326,
    "ndb_name": "Vitamin D3 (cholecalciferol)"
  },
  {
    "ahod_name": "Choline",
    "unit": "mg",
    "nutrient_id": 421,
    "ndb_name": "Choline, total"
  },
  {
    "ahod_name": "Chromium",
    "unit": "ug",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Cobalamin",
    "unit": "ug",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Copper",
    "unit": "mg",
    "nutrient_id": 312,
    "ndb_name": "Copper, Cu"
  },
  {
    "ahod_name": "Crude protein",
    "unit": "g",
    "nutrient_id": 203,
    "ndb_name": "Protein"
  },
  {
    "ahod_name": "EPA+DH",
    "unit": "g",
    "nutrient_id": 629,
    "ndb_name": "20:5 n-3 (EPA)"
  },
  {
    "ahod_name": "Fat",
    "unit": "g",
    "nutrient_id": 204,
    "ndb_name": "Total lipid (fat)"
  },
  {
    "ahod_name": "Folic acid",
    "unit": "ug",
    "nutrient_id": 431,
    "ndb_name": "Folic acid"
  },
  {
    "ahod_name": "Histidine",
    "unit": "g",
    "nutrient_id": 512,
    "ndb_name": "Histidine"
  },
  {
    "ahod_name": "Iodine",
    "unit": "ug",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Iron",
    "unit": "mg",
    "nutrient_id": 303,
    "ndb_name": "Iron, Fe"
  },
  {
    "ahod_name": "Isoleucine",
    "unit": "g",
    "nutrient_id": 503,
    "ndb_name": "Isoleucine"
  },
  {
    "ahod_name": "Leucine",
    "unit": "g",
    "nutrient_id": 504,
    "ndb_name": "Leucine"
  },
  {
    "ahod_name": "Linoleic Acid",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Lysine",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Magnesium",
    "unit": "mg",
    "nutrient_id": 304,
    "ndb_name": "Magnesium, Mg"
  },
  {
    "ahod_name": "Manganese",
    "unit": "mg",
    "nutrient_id": 315,
    "ndb_name": "Manganese, Mn"
  },
  {
    "ahod_name": "Met+Cys",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Methionine",
    "unit": "g",
    "nutrient_id": 506,
    "ndb_name": "Methionine"
  },
  {
    "ahod_name": "Niacin",
    "unit": "mg",
    "nutrient_id": 406,
    "ndb_name": "Niacin"
  },
  {
    "ahod_name": "Pantothenic Acid",
    "unit": "mg",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Phenylalanine",
    "unit": "g",
    "nutrient_id": 508,
    "ndb_name": "Phenylalanine"
  },
  {
    "ahod_name": "Phenylalanine + Tyrosine",
    "unit": "g",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Phosphorus",
    "unit": "g",
    "nutrient_id": 305,
    "ndb_name": "Phosphorus, P"
  },
  {
    "ahod_name": "Potassium",
    "unit": "g",
    "nutrient_id": 306,
    "ndb_name": "Potassium, K"
  },
  {
    "ahod_name": "Pyridoxine",
    "unit": "mg",
    "nutrient_id": 0,
    "ndb_name": 0
  },
  {
    "ahod_name": "Riboflavin",
    "unit": "mg",
    "nutrient_id": 405,
    "ndb_name": "Riboflavin"
  },
  {
    "ahod_name": "Selenium",
    "unit": "ug",
    "nutrient_id": 317,
    "ndb_name": "Selenium, Se"
  },
  {
    "ahod_name": "Sodium",
    "unit": "mg",
    "nutrient_id": 307,
    "ndb_name": "Sodium, Na"
  },
  {
    "ahod_name": "Thiamin",
    "unit": "mg",
    "nutrient_id": 404,
    "ndb_name": "Thiamin"
  },
  {
    "ahod_name": "Threonine",
    "unit": "g",
    "nutrient_id": 502,
    "ndb_name": "Threonine"
  },
  {
    "ahod_name": "Tryptophan",
    "unit": "g",
    "nutrient_id": 501,
    "ndb_name": "Tryptophan"
  },
  {
    "ahod_name": "Valine",
    "unit": "g",
    "nutrient_id": 510,
    "ndb_name": "Valine"
  },
  {
    "ahod_name": "Vitamin A",
    "unit": "RE",
    "nutrient_id": 318,
    "ndb_name": "Vitamin A, IU"
  },
  {
    "ahod_name": "Vitamin A",
    "unit": "IU",
    "nutrient_id": 320,
    "ndb_name": "Vitamin A, RAE"
  },
  {
    "ahod_name": "Vitamin E",
    "unit": "mg",
    "nutrient_id": 573,
    "ndb_name": "Vitamin E, added"
  },
  {
    "ahod_name": "Vitamin K",
    "unit": "mg",
    "nutrient_id": 430,
    "ndb_name": "Vitamin K (phylloquinone)"
  },
  {
    "ahod_name": "Zinc",
    "unit": "mg",
    "nutrient_id": 309,
    "ndb_name": "Zinc, Zn"
  }
];
})