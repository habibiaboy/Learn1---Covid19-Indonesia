// api url 
const api_url = "https://api.kawalcorona.com/indonesia";



async function getAPI (url) {

    const response = await fetch(url);
    //console.log(response);

    const data = await response.json();
    // console.log(data);

    updateUI(data);

}

getAPI(api_url);

function updateUI(data) {
    let contents =  ``; 
    data.forEach(content => contents += showContent(content));
    const contentData = document.querySelector('.container');
    contentData.innerHTML = contents;
}




function showContent(content){
    return `<h1 class="text-center">Informasi COVID19 di ${content.name}</h1>
            <div class="row" style="color:#fff">
            
                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body" style="background-color: #f39c12;">
                        <h5 class="card-title">Positif</h5>
                        <p class="card-text">Jumlah positif saat ini : ${content.positif}</p>
                    </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                    <div class="card-body" style="background-color: #27ae60">
                        <h5 class="card-title">Sembuh</h5>
                        <p class="card-text">Jumlah Sembuh saat ini : ${content.sembuh} </p>
                    </div>
                    </div>
                </div>

            </div>
            <div class="row" style="color:#fff;margin-top:20px">
                
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body" style="background-color: #e74c3c">
                        <h5 class="card-title">Meninggal</h5>
                        <p class="card-text">Jumlah Meninggal saat ini : ${content.meninggal}  </p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body" style="background-color: #2980b9">
                        <h5 class="card-title">Dirawat</h5>
                        <p class="card-text">Jumlah Meninggal saat ini : ${content.dirawat}  </p>
                        </div>
                    </div>
                </div>

            </div>
            <footer>
            <div class="text-center p-3" style="background-color: transparant">
                © 2021 Copyright @habibiaboy
            </div>
            <!-- Copyright -->
            </footer>
            `;
}

