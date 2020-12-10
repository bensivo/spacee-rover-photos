export interface MarsRoverPhoto {
    id: number;
    sol: number;
    camera: MarsRoverCamera;
    img_src: string;
    earth_date: string;
    rover: MarsRoverInfo;
}

export interface MarsRoverCamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}

export interface MarsRoverInfo {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
}
