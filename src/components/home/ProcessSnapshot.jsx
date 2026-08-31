import './ProcessSnapshot.css'

const phases = [
  { step: '01', title: 'Pick & Plan', desc: 'Choose your script and we scope the customization and branding to match your business.' },
  { step: '02', title: 'Build & Test', desc: 'We design, develop, and fully test your platform end-to-end before you see it live.' },
  { step: '03', title: 'Launch & Support', desc: 'We deploy to your server and back it with a year of free support after go-live.' },
]

export default function ProcessSnapshot() {
  return (
    <section className="cs-process-snapshot vc_row wpb_row vc_row-fluid">
      <div className="ld-container container">
        <div className="row ld-row">
          <div className="wpb_column vc_column_container vc_col-sm-10 vc_col-xs-offset-1 vc_col-xs-10">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_wrapper-inner">
                  <header className="fancy-title text-center">
                    <h2>From Script to Launch in 3 Simple Steps</h2>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ld-container container">
        <div className="cs-process-snapshot__grid">
          {phases.map((phase) => (
            <div className="cs-process-snapshot__item" key={phase.step}>
              <span className="cs-process-snapshot__num">{phase.step}</span>
              <h3>{phase.title}</h3>
              <p>{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
