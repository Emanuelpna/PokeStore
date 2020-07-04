class Utils {
  ArrayFromRange(range: number) {
    return Array.from(Array(range).keys());
  }
  
  FormatNumber = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };
}

export default new Utils();
