/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.appointmentapi;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dinith
 */
@Service

public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
     public List<Appointment> getLast() {
        return appointmentRepository.getLast();
    }

    public List<Appointment> checkAppointmentAvbl(int doctorId, Date appointmentDate) {
        return appointmentRepository.checkAppointmentAvbl(doctorId, appointmentDate);
    }
    public List<Appointment> todayAppointments( Date appointmentDate) {
        return appointmentRepository.todayAppointments( appointmentDate);
    }
     public List<Appointment> appointmentsByPatinet( int patientId) {
        return appointmentRepository.appointmentsByPatinet(patientId);
    }
     public List<Appointment> appointmentsByDoctor( int doctorId) {
        return appointmentRepository.appointmentsByDoctor(doctorId);
    }
    
        public List<Appointment> getAppointmentsByStatus(String status, Date appointmentDate) {
        return appointmentRepository.getAppointmentsByStatus(status,appointmentDate);
    }
        public List<Appointment> getAppointmentsByStatusPatient(int patientId, String status) {
        return appointmentRepository.getAppointmentsByStatusPatient(patientId,status);
    }

    public long getCountAppointmentDay(int doctorId, Date appointmentDate) {
        return appointmentRepository.getCountAppointmentDay(doctorId, appointmentDate);
    }

    public Appointment createAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);

    }

    public Appointment updateAppointment(Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    public void deleteAppointmentById(int id) {
        appointmentRepository.deleteById(id);
    }
   
public Appointment getAppointmentById(int id){
        Optional<Appointment> postOptional=appointmentRepository.findById(id);
        return postOptional.get();
    }

}
