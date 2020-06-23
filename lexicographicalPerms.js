//Problem Adı: Lexicographical Permutations, ProjectEuler Numarası: 24
/* Recursive fonksiyon ve stack yapısı kullanılarak da aynı sonuç elde edilebilirdi ancak işlemin komplikasyonunun
*  daha az olması ve döndüreceğimiz dizi değişkeninin tek bir permutasyondan oluşması hem işlemi basitleştireceği hem de
*  çalışma süresini kısaltacağı için iki ayrı fonksiyon kullanarak bu şekilde yazdım  */


//Yer değiştirme fonksiyonu
function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

// Verilen dizinin bir sonraki permutasyonunu bulan fonksiyon
function nextPermutation(arr) {
    let tempArr = arr
    let i = tempArr.length - 1;  //i son indexten başlıyor
    //permutasyonların lexicographic yani sıralı olması için while döngüsü
    while (i > 0 && tempArr[i - 1] >= tempArr[i]) {
        i--;
    }
    //dizinin sıralı olarak başka bir  fonksiyonu yoksa false döndürüyor
    if (i <= 0) {
        return false;
    }

    let j = tempArr.length - 1;

    while (tempArr[j] <= tempArr[i - 1]) {
        j--;
    }
    //swap fonksiyonuyla dizi elemanlarının yerlerini değiştiriyor
    swap(tempArr, i - 1, j)

    j = tempArr.length - 1;

    while (i < j) {
        swap(tempArr, i, j)
        i++;
        j--;
    }
    //bir sonraki permutasyonu döndürüyor
    return tempArr;
}

//Parametreler: array --> permutasyonları bulunacak dizi, tar --> hedef permutasyon sırası
function lexPerm(array, tar) {
    //Fonksiyonun orijinal diziyi etkilememesi için bir kopyasını oluşturdum ve bütün işlemleri bunun üzerinde yaptım
    let tempArr = array
    let count = 1
    /*hedeflenen permutasyonda durması için count değişkeni tanımladım ve while döngüsü ile her adımda değerini 1
    * arttırdığım count değişkeni hedeflenen sayıya gelene kadar bir sonraki permutasyonu bulmaya devam edecek */
    while (count < tar) {
        nextPermutation(tempArr)
        count++
    }
    return console.log("Verilen dizinin",tar+".","permutasonu = " + tempArr )
}

let myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

lexPerm(myArr,1000000)
