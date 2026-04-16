import React, { useState } from 'react';
import { Card, Button, Input } from '../components/ui';
import { Star } from 'lucide-react';

export const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="animate-fade-in w-full max-w-3xl mx-auto py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold mb-2">Leave Feedback</h1>
        <p className="text-brand-600 font-medium text-lg">Your review helps our community find the best tutors.</p>
      </div>

      <Card className="p-8 md:p-10">
        <form>
          <div className="mb-8">
            <label className="block text-brand-950 font-bold mb-3">Select the Tutor</label>
            <select className="w-full p-3 rounded-8px border border-brand-200 outline-none focus:border-brand-950 font-sans text-base bg-white">
              <option value="" disabled selected>Choose a tutor you had a session with...</option>
              <option>Sarah Miller - Advanced Calculus</option>
              <option>David Chen - Spanish</option>
            </select>
          </div>

          <div className="mb-8">
            <label className="block text-brand-950 font-bold mb-3">Overall Rating</label>
            <div className="flex gap-2" onMouseLeave={() => setHoverRating(0)}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button 
                  key={star}
                  type="button"
                  onMouseEnter={() => setHoverRating(star)}
                  onClick={() => setRating(star)}
                  className="bg-transparent border-none cursor-pointer p-1 hover:scale-110 transition-transform"
                >
                  <Star 
                    size={40} 
                    className={`${(hoverRating || rating) >= star ? 'fill-amber-400 text-amber-400' : 'text-brand-200'}`} 
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-brand-950 font-bold mb-3">Write your review</label>
            <textarea 
              className="w-full p-4 rounded-8px border border-brand-200 outline-none focus:border-brand-950 font-sans text-base resize-none min-h-[150px]"
              placeholder="What did you like about the session? Was the tutor prepared? Did they explain concepts clearly?"
            ></textarea>
          </div>

          <div className="flex items-center gap-2 mb-8">
            <input type="checkbox" id="public" defaultChecked className="w-4 h-4 accent-brand-950 rounded cursor-pointer" />
            <label htmlFor="public" className="text-sm font-medium cursor-pointer select-none">Make my review public to help others</label>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="secondary" className="px-8">Cancel</Button>
            <Button type="submit" variant="primary" className="px-8">Submit Review</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
