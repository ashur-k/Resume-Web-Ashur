      let MAPKEY ="AIzaSyDlaQZBO-WosqpnUVqkWyicmiW6rKSP1as";
        let map;
            document.addEventListener("DOMContentLoaded", ()=>{
            
            let s = document.createElement("script");
            document.head.appendChild(s);
            
            s.addEventListener("load", () => {
                //script has loaded
                console.log("script has loaded");
                map = new google.maps.Map(document.getElementById("map"), 
                {  
                    center: {lat: 45.349711, lng: -75.7569551},
                    zoom: 16,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });
            });
            s.src = `https://maps.googleapis.com/maps/api/js?key=${MAPKEY}`;
        });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

            var locations = [
            {
                lat: 40.785091,
                lng: -73.968285
            }, 
            {
                lat: 40.084045,
                lng: -73.874256
            }, 
            {
                lat: 40.754932,
                lng: -73.984016
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length],
                    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }

