/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.example.appointmentapi;

import java.util.Date;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 *
 * @author dinith
 */
public interface AppointmentRepository extends JpaRepository<Appointment, Integer> {

    @Query("Select pt from Appointment pt where pt.doctorId=?1 and pt.appointmentDate=?2") 
    public List<Appointment> checkAppointmentAvbl(int doctorId, Date appointmentDate);
    
     @Query("Select pt from Appointment pt where pt.status=?1 and pt.appointmentDate=?2") 
    public List<Appointment> getAppointmentsByStatus(String status, Date appointmentDate);
    
    @Query("Select pt from Appointment pt where pt.patientId=?1 and pt.status=?2") 
    public List<Appointment> getAppointmentsByStatusPatient(int patientId,String status);
    
     @Query("Select pt from Appointment pt where pt.appointmentDate=?1")
    public List<Appointment> todayAppointments( Date appointmentDate);
    
     @Query("Select pt from Appointment pt where pt.patientId=?1")
    public List<Appointment> appointmentsByPatinet( int patientId);
    
    @Query("Select pt from Appointment pt where pt.doctorId=?1")
    public List<Appointment> appointmentsByDoctor( int doctorId);

    @Query("SELECT COUNT(pt) from Appointment pt where pt.doctorId=?1 and pt.appointmentDate=?2")
    long getCountAppointmentDay(int doctorId, Date appointmentDate);
    
     @Query ("Select pt from Appointment pt ORDER BY pt.id DESC ")

    public List<Appointment> getLast();
    

}
