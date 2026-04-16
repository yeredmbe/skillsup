import React from 'react';
import { Card, Button } from '../ui';
import { Star, MapPin, BookOpen, Clock } from 'lucide-react';

export const TeacherCard = ({ teacher }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-4 mb-4 items-start">
        <img 
          src={teacher.avatar} 
          alt={teacher.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-brand-100"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-brand-950 text-lg m-0">{teacher.name}</h3>
            <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded text-sm font-semibold text-amber-600">
              <Star size={14} className="fill-amber-500" />
              {teacher.rating}
            </div>
          </div>
          <p className="text-brand-600 text-sm m-0 line-clamp-1">{teacher.headline}</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 text-sm text-brand-600 mb-6 flex-1">
        <div className="flex items-center gap-2">
          <BookOpen size={16} className="text-accent-blue" />
          <span className="font-medium">{teacher.subjects.join(', ')}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{teacher.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span className="font-semibold text-brand-950">${teacher.rate}/hr</span>
        </div>
      </div>

      <Button variant="secondary" className="w-full">View Profile</Button>
    </Card>
  );
};

export const MetricCard = ({ title, value, change, icon: Icon, positive }) => {
  return (
    <Card className="flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-brand-50 rounded-8px">
          {Icon && <Icon className="text-brand-800" size={24} />}
        </div>
        {change && (
          <span className={`text-sm font-semibold px-2 py-1 rounded ${positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {positive ? '+' : ''}{change}%
          </span>
        )}
      </div>
      <h3 className="text-brand-500 text-sm font-medium m-0 mb-1">{title}</h3>
      <p className="text-3xl font-bold text-brand-950 m-0">{value}</p>
    </Card>
  );
};
