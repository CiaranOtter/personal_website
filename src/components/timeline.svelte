<script>

  import { fade, fly } from 'svelte/transition'
  // Timeline data
  const events = [
    {
      date: '👶 2001',
      title: 'New coder deployed into the world',
      description: 'Initial release. No bugs (that I know of), but plenty of potential updates to come.'
    },
    {
      date: '🖥 2009',
      title: 'First steps into code',
      description: "Discovered Scratch, dragging and dropping my way into programming. Felt like a wizard."
    },
    {
      date: '🍓 2013',
      title: 'The Raspberry Pi Era',
      description: 'Got my hands on a Raspberry Pi 1. Tinkered, experimented, and probably fried a few circuits along the way.'
    },
    {
      date: '💾 2017',
      title: 'Diving into Delphi',
      description: 'Version 2.0 of me: writing real code, making real programs, and realizing that debugging is just a way of life.'
    },
    {
      date: '🎓 2020',
      title: 'Going deeper',
      description: 'Started university at Wits. Learned a lot, broke a lot (code, not bones), and built even more.'
    },
    {
      date: '📊 2021',
      title: 'Mediahack covid dashboard',
      description: 'Helped build a dashboard that actually made a difference. Industry recognition followed—turns out data is powerful.'
    },
    {
      date: '🎮 2022',
      title: 'Gaming Meets Code',
      description: 'Realized I could build my own games instead of just playing them. Cue many late nights fueled by curiosity (and caffeine).'
    }, {
      date: '🏆 2023',
      title: 'Vodacom Journalist of the Year',
      description: 'Apparently, I write code and stories well enough to win awards. Who knew?'
    }, {
      date: '🎓 2024',
      title: 'New Chapter at Stellenbosch University',
      description: 'Another adventure begins! More learning, more building, and probably more coffee.'
    }, {
      date: '☁️ 2024',
      title: 'Into the cloud',
      description: 'Dove into Kubernetes, gRPC, and microservices. Accidentally created a self-replicating pod once—oops.'
    }, {
      date: '🔬 2024',
      title: "The quantum leap",
      description: "Started exploring quantum computing. Still trying to figure out if I exist in multiple states at once."
    }, {
      date: '🚀 Today',
      title: 'Always Learning, Always Building',
      description: "From backend systems to game dev, from quantum circuits to AI, I'm always on a mission to create, break, and improve. What’s next? Let’s find out!"
    }
  ];

  let visible = true


</script>

<div class="timeline-container">
  <h2>The Journey so far</h2>
  <div class="timeline-scroll">
    <div class="timeline">
      {#each events as event (event)}
      {#if visible}
        <div class="timeline-card"
        in:fly={{delay: 2000, y: 200, duration: 2000 }} 
        out:fade={{duration: 1000}}>
          <!-- <div class="dot"></div> -->
          <div class="date">{event.date}</div>
           <!-- <div class="date">{JSON.stringify(event)}</div> -->
          <h3>{event.title}</h3>
          <p>{event.description}</p>
        </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  .timeline-container {
    width: 100%;
    padding: 20px 0;
  }

  .timeline-scroll {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding: 20px 0;
  }

  .timeline {
    display: flex;
    gap: 2rem;
    padding: 0 2rem;
    min-width: max-content;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 2rem;
    right: 2rem;
    height: 2px;
    background: var(--black);
    z-index: 0;
  }

  .timeline-card {
    position: relative;
    background: var(--black);
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 250px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }

  .dot {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: #3b82f6;
    border-radius: 50%;
    border: 4px solid var(--border);
  }

  .date {
    font-size: 0.875rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--tertiary)
  }

  p {
    color: var(--white);
    font-size: 0.875rem;
  }

  /* For Webkit browsers */
  .timeline-scroll::-webkit-scrollbar {
    height: 8px;
  }

  .timeline-scroll::-webkit-scrollbar-track {
    background: var(--white);
    border-radius: 4px;
  }

  .timeline-scroll::-webkit-scrollbar-thumb {
    background: var(--black);
    border-radius: 4px;
  }

  .timeline-scroll::-webkit-scrollbar-thumb:hover {
    /* background:; */
  }
</style>
