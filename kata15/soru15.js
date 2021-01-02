const DNAStrand = (dna) =>                                                                                                                               
  dna.replace(/./g, (c) => ({ A: "T", T: "A", C: "G", G: "C" }[c]));

console.log(DNAStrand("ATTGC"));