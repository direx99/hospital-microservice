/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.appointmentapi;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author dinith
 */
@RestController
@CrossOrigin
public class AppointmentControl {

    @Autowired
    private AppointmentService appointmentService;

    @GetMapping(path = "/appointments")
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }
    @GetMapping(path = "/last")
    public List<Appointment> getLast() {
        return appointmentService.getLast();
    }

    @GetMapping(path = "appointments/{doctorId}/{appointmentDate}")
    public List<Appointment> checkAppointmentAvbl(@PathVariable int doctorId, @DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable Date appointmentDate) {

        return appointmentService.checkAppointmentAvbl(doctorId, appointmentDate);

    }
     @GetMapping(path = "appointmentstoday/{appointmentDate}")
    public List<Appointment> todayAppointments( @DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable Date appointmentDate) {

        return appointmentService.todayAppointments(appointmentDate);

    }
    @GetMapping(path = "appointments/patient{patientId}")
    public List<Appointment> appointmentsByPatinet( @PathVariable int patientId) {

        return appointmentService.appointmentsByPatinet(patientId);

    }
     @GetMapping(path = "appointments/doctorId{doctorId}")
    public List<Appointment> appointmentsByDoctor( @PathVariable int doctorId) {

        return appointmentService.appointmentsByDoctor(doctorId);

    }
    
    
    @GetMapping(path = "appointments-states/{status}/{appointmentDate}")
    public List<Appointment> getAppointmentsByStatus(@PathVariable String status, @DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable Date appointmentDate) {

        return appointmentService.getAppointmentsByStatus(status, appointmentDate);

    }
    @GetMapping(path = "appointments/patients{patientId}/status{status}")
    public List<Appointment> getAppointmentsByStatus(@PathVariable int patientId,@PathVariable String status) {

        return appointmentService.getAppointmentsByStatusPatient(patientId, status);

    }

    @GetMapping(path = "today-appointments/{doctorId}/{appointmentDate}")
    public long getCountAppointmentDay(@PathVariable int doctorId, @DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable Date appointmentDate) {

        return appointmentService.getCountAppointmentDay(doctorId, appointmentDate);

    }

    @PostMapping(path = "/appointments")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @PutMapping(path = "/appointments")
    public Appointment updateAppointment(@RequestBody Appointment appointment) {
        return appointmentService.updateAppointment(appointment);
    }

    @DeleteMapping(path = "/appointments/{id}")
    public void deleteAppointmentById(@PathVariable int id) {
        appointmentService.deleteAppointmentById(id);
    }

    @GetMapping(path = "/appointments/{id}")
    public Appointment getAppointmentById(@PathVariable int id) {
        return appointmentService.getAppointmentById(id);
    }

     
   
}

