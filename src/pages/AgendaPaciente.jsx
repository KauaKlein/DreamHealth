const appointments = [
  {
    id: 1,
    day: "Ter",
    startTime: "08:00",
    endTime: "09:00",
    patient: "Medico: Fernando",
    type: "Consulta - Retorno",
    color: "red",
  },
];

const colorMap = {
  red: "bg-red-500 border-red-700",
};

const Agendapaciente = () => {
  const days = [
    "Dom 22/7",
    "Seg 23/7",
    "Ter 24/7",
    "Qua 25/7",
    "Qui 26/7",
    "Sex 27/7",
    "Sáb 28/7",
  ];
  const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
  ];
  const dayMap = { Dom: 0, Seg: 1, Ter: 2, Qua: 3, Qui: 4, Sex: 5, Sáb: 6 };
  const ROW_HEIGHT = 80;

  const timeToPosition = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = (hours - 8) * 60 + minutes;
    return (totalMinutes / 60) * ROW_HEIGHT;
  };
  const durationToHeight = (start, end) => {
    const [startHours, startMinutes] = start.split(":").map(Number);
    const [endHours, endMinutes] = end.split(":").map(Number);
    const durationMinutes =
      (endHours - startHours) * 60 + (endMinutes - startMinutes);
    return (durationMinutes / 60) * ROW_HEIGHT;
  };

  return (
    <div className="flex-1 text-gray-200">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2"></div>
        <h2 className="text-xl font-semibold">22 - 28 de Jul de 2050</h2>
        <div className="flex items-center border border-gray-600 rounded text-sm font-semibold">
          <button className="px-3 py-1.5 hover:bg-gray-700 rounded-l-md">
            Mês
          </button>
          <button className="px-3 py-1.5 border-l border-r border-gray-600 bg-[#7A57C1] text-white">
            Semana
          </button>
          <button className="px-3 py-1.5 hover:bg-gray-700 rounded-r-md">
            Dia
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr] bg-[#2a2141] rounded-lg">
        <div className="col-start-1 row-start-1 bg-[#221c38] rounded-tl-lg border-r border-b border-gray-700">
          <div className="h-10 flex items-center justify-center font-semibold text-sm text-gray-400">
            Recados
          </div>
        </div>
        <div className="col-start-2 row-start-1 grid grid-cols-7 border-b border-gray-700">
          {days.map((day) => (
            <div
              key={day}
              className="p-2 text-center font-semibold text-sm text-gray-400 border-l border-gray-700 first:border-l-0"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="col-start-1 row-start-2 flex flex-col">
          {times.map((time) => (
            <div
              key={time}
              className="h-[80px] text-right pr-2 text-xs text-gray-500 font-semibold border-r border-gray-700 pt-1"
            >
              {time}
            </div>
          ))}
        </div>
        <div className="col-start-2 row-start-2 grid grid-cols-7 relative">
          {days.map((_, dayIndex) => (
            <div
              key={dayIndex}
              className="border-l border-gray-700 first:border-l-0"
            >
              {times.map((_, timeIndex) => (
                <div
                  key={timeIndex}
                  className="h-[80px] border-b border-gray-700"
                ></div>
              ))}
            </div>
          ))}

          {appointments.map((app) => (
            <div
              key={app.id}
              className={`absolute text-white text-xs p-2 rounded-md border-l-4 ${
                colorMap[app.color]
              }`}
              style={{
                top: `${timeToPosition(app.startTime)}px`,
                height: `${durationToHeight(app.startTime, app.endTime)}px`,
                left: `calc(${(100 / 7) * dayMap[app.day]}% + 2px)`,
                width: `calc(${100 / 7}% - 4px)`,
              }}
            >
              <div className="font-bold">{`${app.startTime} - ${app.endTime}`}</div>
              <div>{app.patient}</div>
              <div className="font-semibold">{app.type}</div>
              {app.representative && <div>{app.representative}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agendapaciente;
