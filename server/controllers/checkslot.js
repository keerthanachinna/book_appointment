
    let getsearch = req.body;

    let startTime1 = getsearch.slot_mrng_start_time;
    let endTime1 = getsearch.slot_mrng_end_time;

    let startTime3 = getsearch.slot_evng_start_time;
    let endTime3 = getsearch.slot_evng_end_time;

    var startDate = new Date(getsearch.start_date); //YYYY-MM-DD
   


    if ((startTime1 && endTime1) && (startTime1 != "00:00:00" && endTime1 != "00:00:00")) {
        var intervals_slots1 = getTimeIntervals(startTime1, endTime1, getsearch, dateArr);
    }
    if ((startTime3 && endTime3) && (startTime3 != "00:00:00" && endTime3 != "00:00:00")) {
        var intervals_slots3 = getTimeIntervals(startTime3, endTime3, getsearch, dateArr);
    }

    var bulkSlots = [];
    if (intervals_slots1 && intervals_slots1.length > 0) {
        bulkSlots = bulkSlots.concat(intervals_slots1);
    }
    if (intervals_slots3 && intervals_slots3.length > 0) {
        bulkSlots = bulkSlots.concat(intervals_slots3);
    }

    console.log('dsdsd', bulkSlots);
    if (bulkSlots.length > 0) {
        var appointment_slots = await appointment_slots_tbl.bulkCreate(bulkSlots, {
            returning: true
        });
    }

    return res.send({
        status: appointment_slots ? 'success' : 'error',
        statusCode: appointment_slots && appointment_slots.length > 0 ? httpStatus.OK : httpStatus.BAD_REQUEST,
        msg: appointment_slots && appointment_slots.length > 0 ? "Appointment Slots added successfully" : "Appointment slots not added (Slot Dates are not valid)",
        req: getsearch,
        responseContents: appointment_slots && appointment_slots.length > 0 ? appointment_slots : []
    });

} catch (err) {
    const errorMsg = err.errors ? err.errors[0].message : err.message;
    return res.status(httpStatus.OK).json({
        status: "error",
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        msg: "Failed to save Appointment slots",
        actualMsg: errorMsg
    });
}