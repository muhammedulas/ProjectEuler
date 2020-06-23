//Problem Adı: Almost Equalateral Triangles, Project Euler Numarası: 94

function almostEquilateral(Len) {
    let sum, side, prevSide, gap, per;      //sırasıyla toplam, kenar uzunluğu, bir onceki kenar uzunluğu, fark, çevre
    sum = 0;
    side = 1;
    prevSide = 1;
    gap = 1;
    per = 0
    while (per <= Len) {
        prevSide = side      //bir önceki kenar uzunluğunu atıyor
        side = (4 * side) - prevSide + (2 * gap)  //yeni kenar uzunluğunu buluyor
        gap = -gap      //üçüncü kenara farkını verecek olan değişkenin her adımda tersini alıyor
        sum += per      //toplam değişkenine koşulları sağlayan üçgenlerin çevre uzunluğunu ekliyor
        per = 3*side -gap      //çevre uzunluklarını buluyor(3 kenarın uzunluğu +- farklı kenarın farkı)

    }
    console.log("Çevre Uzunlukları Toplamı:",sum)
}

//fonksiyonu kullanırken local "Len" değişkeniyle kendi üst sınırımızı belirliyoruz(Çevre uzunluğu için)
almostEquilateral(1000000000)
