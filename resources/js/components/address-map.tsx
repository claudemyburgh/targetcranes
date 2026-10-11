import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
// @ts-ignore
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Wrapper from "@/components/ui/misc/wrapper";
import {SwipeLine, SwipeTitle} from "@/components/ui/swipe-title.tsx";

// Fix for leaflet icon in Vite
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export function AddressMap() {
    const position: [number, number] = [-33.92100507840956, 18.646894441076522];

    return (
        <section className="bg-background border-t border-border py-16 lg:py-24">
            <Wrapper>
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="lg:w-1/3 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1.5 bg-linear-to-r from-primary to-primary rounded-full"></div>
                            <span className="text-primary font-bold uppercase tracking-widest text-sm">Find Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-balance">
                            <SwipeTitle
                                className="text-4xl md:text-6xl font-black font-heading tracking-tighter uppercase text-balance">
                                <SwipeLine>Our <span
                                    className="bg-linear-to-r from-primary to-primary inline-block px-1 bg-clip-text text-transparent">Location</span></SwipeLine>
                            </SwipeTitle>

                        </h2>
                        <div className="text-lg text-muted-foreground leading-relaxed">
                            <p className="font-bold text-foreground">Target Cranes</p>
                            <p>Fabriek St</p>
                            <p>Bellville South</p>
                            <p>Cape Town, 7530</p>
                            <p>South Africa</p>
                        </div>
                    </div>
                    <div className="lg:w-2/3 w-full">
                        <div
                            className="w-full h-100 rounded-xl overflow-hidden shadow-lg border border-border relative z-0">
                            <MapContainer center={position} zoom={17} scrollWheelZoom={false}
                                          className="w-full h-full relative z-0"
                                          style={{height: "100%", width: "100%", zIndex: 0}}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={position}>
                                    <Popup>
                                        <strong>Target Cranes</strong><br/>
                                        Fabriek St<br/>
                                        Bellville South<br/>
                                        Cape Town, 7530
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default AddressMap;
