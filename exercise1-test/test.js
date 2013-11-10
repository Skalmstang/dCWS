/**
 * Created with IntelliJ IDEA.
 * User: xXx
 * Date: 07-11-13
 * Time: 21:10
 * To change this template use File | Settings | File Templates.
 */

MultisetTest = TestCase("MultisetTest");

MultisetTest.prototype.test = function() {
    var m = new MultiSet();
    // Add some data.
    m.add("Bat");
    m.add("Bat");
    m.add("Bat");
    m.add("Horse");
    // Check content.
    assertEquals(4, m.count());
    assert(m.contains("Bat"));
    assert(m.contains("Horse"));
    assert(!m.contains("Monkey"));
    // Remove some data.
    m.remove("Horse");
    m.remove("Bat");
    m.remove("Monkey");
    // Check content.
    assertEquals(2, m.count());
    assert(m.contains("Bat"));
    assert(!m.contains("Horse"));
    assert(!m.contains("Monkey"));
};