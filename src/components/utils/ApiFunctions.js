import axios from "axios";

export const api= axios.create({
    baseURL:"http://localhost:9192"
});
//add room
export async function addRoom(photo, roomType, roomPrice){
    const formData=new FormData();

    formData.append("photo",photo);
    formData.append( "roomType",roomType);
    formData.append("roomPrice",roomPrice);

    const response=await api.post("/rooms/add/new-room",formData);

    if(response.status===201){
        return true;
    }else{
        return false;
    }
}
//get room by room type
export async function getRoomType() {
    try {
        const response = await api.get("/rooms/room/types");
        console.log("done........")
        return response.data;
        
    } catch (error) {
        console.log("Error.............")
        throw new Error("Error fetching room type");
    }
}
// get all rooms
export async function getAllRooms() {
	try {
		const result = await api.get("/rooms/all-rooms")
		return result.data
	} catch (error) {
		throw new Error("Error fetching rooms")
	}
}
//delete room by id
export async function deleteRoom(roomId){
    try {
        const result=await api.get(`rooms/delete/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error deleting room ${error.message}`);
    }
}
//update room by id
export async function updateRoom(roomId,roomData){
    const formData=new FormData();
    formData.append("roomType",roomData.roomType);
    formData.append("roomPrice",roomData.roomPrice);
    formData.append("photo",roomData.photo);
    const response=await api.put(`/rooms/update/${roomId}`,formData);
    return response;
}
//get room by id
export async function getRoomById(roomId){
    try {
        const result=await api.get(`/rooms/room/${roomId}`)
        return result.data
    } catch (error) {
        throw new Error(`Error fetching room ${error.message}`);
    }
}
//save a new booking to the database
export async function bookRoom(roomId,booking){
    try {
        const response=await api.post(`/bookings/room/${roomId}/booking`,booking);
        console.log(response.data)
        return response.data;
    } catch (error) {
        if(error.response && error.response.data){
            throw new Error(error.response.data);
        }else{
            throw new Error(`Error booking room: ${error.message}`)
        }
    }
    
}
//find all bookings
export async function getAllBookings(){
    try {
        const result=await api.get(`bookings/all-bookings`);
        return result.data;
    } catch (error) {
        throw new Error(`Error fetching bookings: ${error.message}`);
    }
}
//get booking by confirmation code
export async function getBookingByConfirmationCode(confirmationCode){
    try {
        const result=await api.get(`bookings/confirmation/${confirmationCode}`);
        return result.data;
    } catch (error) {
        if(error.response && error.response.data){
            throw new Error(error.response.data);
        }else{
            throw new Error(`Error find booking: ${error.message}`)
        }
    }
}
//cancel the booking
export async function cancelBooking(bookingId) {
	try {
		const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
		return result.data
	} catch (error) {
		throw new Error(`Error cancelling booking :${error.message}`)
	}
}

/* This function gets all availavle rooms from the database with a given date and a room type */
export async function getAvailableRooms(checkInDate, checkOutDate, roomType) {
	const result = await api.get(
		`rooms/available-rooms?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&roomType=${roomType}`
	)
	return result
}