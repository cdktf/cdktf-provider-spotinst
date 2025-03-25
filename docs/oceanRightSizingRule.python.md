# `oceanRightSizingRule` Submodule <a name="`oceanRightSizingRule` Submodule" id="@cdktf/provider-spotinst.oceanRightSizingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanRightSizingRule <a name="OceanRightSizingRule" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule spotinst_ocean_right_sizing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recommendation_application_intervals: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]],
  rule_name: str,
  attach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]] = None,
  detach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]] = None,
  exclude_preliminary_recommendations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ocean_id: str = None,
  recommendation_application_boundaries: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]] = None,
  recommendation_application_hpa: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]] = None,
  recommendation_application_min_threshold: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]] = None,
  recommendation_application_overhead_values: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]] = None,
  restart_replicas: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationIntervals">recommendation_application_intervals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]</code> | recommendation_application_intervals block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.attachWorkloads">attach_workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]</code> | attach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.detachWorkloads">detach_workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]</code> | detach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.excludePreliminaryRecommendations">exclude_preliminary_recommendations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationBoundaries">recommendation_application_boundaries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]</code> | recommendation_application_boundaries block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationHpa">recommendation_application_hpa</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]</code> | recommendation_application_hpa block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationMinThreshold">recommendation_application_min_threshold</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]</code> | recommendation_application_min_threshold block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationOverheadValues">recommendation_application_overhead_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]</code> | recommendation_application_overhead_values block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.restartReplicas">restart_replicas</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recommendation_application_intervals`<sup>Required</sup> <a name="recommendation_application_intervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationIntervals"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]

recommendation_application_intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_intervals OceanRightSizingRule#recommendation_application_intervals}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.ruleName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}.

---

##### `attach_workloads`<sup>Optional</sup> <a name="attach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.attachWorkloads"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]

attach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#attach_workloads OceanRightSizingRule#attach_workloads}

---

##### `detach_workloads`<sup>Optional</sup> <a name="detach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.detachWorkloads"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]

detach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#detach_workloads OceanRightSizingRule#detach_workloads}

---

##### `exclude_preliminary_recommendations`<sup>Optional</sup> <a name="exclude_preliminary_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.excludePreliminaryRecommendations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocean_id`<sup>Optional</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.oceanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}.

---

##### `recommendation_application_boundaries`<sup>Optional</sup> <a name="recommendation_application_boundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationBoundaries"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]

recommendation_application_boundaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_boundaries OceanRightSizingRule#recommendation_application_boundaries}

---

##### `recommendation_application_hpa`<sup>Optional</sup> <a name="recommendation_application_hpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationHpa"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]

recommendation_application_hpa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_hpa OceanRightSizingRule#recommendation_application_hpa}

---

##### `recommendation_application_min_threshold`<sup>Optional</sup> <a name="recommendation_application_min_threshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationMinThreshold"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]

recommendation_application_min_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_min_threshold OceanRightSizingRule#recommendation_application_min_threshold}

---

##### `recommendation_application_overhead_values`<sup>Optional</sup> <a name="recommendation_application_overhead_values" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationOverheadValues"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]

recommendation_application_overhead_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_overhead_values OceanRightSizingRule#recommendation_application_overhead_values}

---

##### `restart_replicas`<sup>Optional</sup> <a name="restart_replicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.restartReplicas"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads">put_attach_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads">put_detach_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries">put_recommendation_application_boundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa">put_recommendation_application_hpa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals">put_recommendation_application_intervals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold">put_recommendation_application_min_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues">put_recommendation_application_overhead_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads">reset_attach_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads">reset_detach_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetExcludePreliminaryRecommendations">reset_exclude_preliminary_recommendations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId">reset_ocean_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries">reset_recommendation_application_boundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationHpa">reset_recommendation_application_hpa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold">reset_recommendation_application_min_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues">reset_recommendation_application_overhead_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartReplicas">reset_restart_replicas</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_attach_workloads` <a name="put_attach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads"></a>

```python
def put_attach_workloads(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]

---

##### `put_detach_workloads` <a name="put_detach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads"></a>

```python
def put_detach_workloads(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]

---

##### `put_recommendation_application_boundaries` <a name="put_recommendation_application_boundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries"></a>

```python
def put_recommendation_application_boundaries(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]

---

##### `put_recommendation_application_hpa` <a name="put_recommendation_application_hpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa"></a>

```python
def put_recommendation_application_hpa(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]

---

##### `put_recommendation_application_intervals` <a name="put_recommendation_application_intervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals"></a>

```python
def put_recommendation_application_intervals(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]

---

##### `put_recommendation_application_min_threshold` <a name="put_recommendation_application_min_threshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold"></a>

```python
def put_recommendation_application_min_threshold(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]

---

##### `put_recommendation_application_overhead_values` <a name="put_recommendation_application_overhead_values" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues"></a>

```python
def put_recommendation_application_overhead_values(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]

---

##### `reset_attach_workloads` <a name="reset_attach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads"></a>

```python
def reset_attach_workloads() -> None
```

##### `reset_detach_workloads` <a name="reset_detach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads"></a>

```python
def reset_detach_workloads() -> None
```

##### `reset_exclude_preliminary_recommendations` <a name="reset_exclude_preliminary_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetExcludePreliminaryRecommendations"></a>

```python
def reset_exclude_preliminary_recommendations() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ocean_id` <a name="reset_ocean_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId"></a>

```python
def reset_ocean_id() -> None
```

##### `reset_recommendation_application_boundaries` <a name="reset_recommendation_application_boundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries"></a>

```python
def reset_recommendation_application_boundaries() -> None
```

##### `reset_recommendation_application_hpa` <a name="reset_recommendation_application_hpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationHpa"></a>

```python
def reset_recommendation_application_hpa() -> None
```

##### `reset_recommendation_application_min_threshold` <a name="reset_recommendation_application_min_threshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold"></a>

```python
def reset_recommendation_application_min_threshold() -> None
```

##### `reset_recommendation_application_overhead_values` <a name="reset_recommendation_application_overhead_values" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues"></a>

```python
def reset_recommendation_application_overhead_values() -> None
```

##### `reset_restart_replicas` <a name="reset_restart_replicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartReplicas"></a>

```python
def reset_restart_replicas() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OceanRightSizingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OceanRightSizingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanRightSizingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads">attach_workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads">detach_workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries">recommendation_application_boundaries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpa">recommendation_application_hpa</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList">OceanRightSizingRuleRecommendationApplicationHpaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals">recommendation_application_intervals</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold">recommendation_application_min_threshold</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues">recommendation_application_overhead_values</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput">attach_workloads_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput">detach_workloads_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendationsInput">exclude_preliminary_recommendations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput">ocean_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput">recommendation_application_boundaries_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpaInput">recommendation_application_hpa_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput">recommendation_application_intervals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput">recommendation_application_min_threshold_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput">recommendation_application_overhead_values_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicasInput">restart_replicas_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput">rule_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendations">exclude_preliminary_recommendations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId">ocean_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicas">restart_replicas</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName">rule_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attach_workloads`<sup>Required</sup> <a name="attach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads"></a>

```python
attach_workloads: OceanRightSizingRuleAttachWorkloadsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a>

---

##### `detach_workloads`<sup>Required</sup> <a name="detach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads"></a>

```python
detach_workloads: OceanRightSizingRuleDetachWorkloadsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a>

---

##### `recommendation_application_boundaries`<sup>Required</sup> <a name="recommendation_application_boundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries"></a>

```python
recommendation_application_boundaries: OceanRightSizingRuleRecommendationApplicationBoundariesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a>

---

##### `recommendation_application_hpa`<sup>Required</sup> <a name="recommendation_application_hpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpa"></a>

```python
recommendation_application_hpa: OceanRightSizingRuleRecommendationApplicationHpaList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList">OceanRightSizingRuleRecommendationApplicationHpaList</a>

---

##### `recommendation_application_intervals`<sup>Required</sup> <a name="recommendation_application_intervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals"></a>

```python
recommendation_application_intervals: OceanRightSizingRuleRecommendationApplicationIntervalsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a>

---

##### `recommendation_application_min_threshold`<sup>Required</sup> <a name="recommendation_application_min_threshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold"></a>

```python
recommendation_application_min_threshold: OceanRightSizingRuleRecommendationApplicationMinThresholdList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a>

---

##### `recommendation_application_overhead_values`<sup>Required</sup> <a name="recommendation_application_overhead_values" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues"></a>

```python
recommendation_application_overhead_values: OceanRightSizingRuleRecommendationApplicationOverheadValuesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a>

---

##### `attach_workloads_input`<sup>Optional</sup> <a name="attach_workloads_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput"></a>

```python
attach_workloads_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]

---

##### `detach_workloads_input`<sup>Optional</sup> <a name="detach_workloads_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput"></a>

```python
detach_workloads_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]

---

##### `exclude_preliminary_recommendations_input`<sup>Optional</sup> <a name="exclude_preliminary_recommendations_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendationsInput"></a>

```python
exclude_preliminary_recommendations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ocean_id_input`<sup>Optional</sup> <a name="ocean_id_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput"></a>

```python
ocean_id_input: str
```

- *Type:* str

---

##### `recommendation_application_boundaries_input`<sup>Optional</sup> <a name="recommendation_application_boundaries_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput"></a>

```python
recommendation_application_boundaries_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]

---

##### `recommendation_application_hpa_input`<sup>Optional</sup> <a name="recommendation_application_hpa_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpaInput"></a>

```python
recommendation_application_hpa_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]

---

##### `recommendation_application_intervals_input`<sup>Optional</sup> <a name="recommendation_application_intervals_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput"></a>

```python
recommendation_application_intervals_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]

---

##### `recommendation_application_min_threshold_input`<sup>Optional</sup> <a name="recommendation_application_min_threshold_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput"></a>

```python
recommendation_application_min_threshold_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]

---

##### `recommendation_application_overhead_values_input`<sup>Optional</sup> <a name="recommendation_application_overhead_values_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput"></a>

```python
recommendation_application_overhead_values_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]

---

##### `restart_replicas_input`<sup>Optional</sup> <a name="restart_replicas_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicasInput"></a>

```python
restart_replicas_input: str
```

- *Type:* str

---

##### `rule_name_input`<sup>Optional</sup> <a name="rule_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput"></a>

```python
rule_name_input: str
```

- *Type:* str

---

##### `exclude_preliminary_recommendations`<sup>Required</sup> <a name="exclude_preliminary_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendations"></a>

```python
exclude_preliminary_recommendations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ocean_id`<sup>Required</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

---

##### `restart_replicas`<sup>Required</sup> <a name="restart_replicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicas"></a>

```python
restart_replicas: str
```

- *Type:* str

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OceanRightSizingRuleAttachWorkloads <a name="OceanRightSizingRuleAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads(
  namespaces: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespaces]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces">namespaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]</code> | namespaces block. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces"></a>

```python
namespaces: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleAttachWorkloadsNamespaces <a name="OceanRightSizingRuleAttachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces(
  namespace_name: str,
  labels: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesLabels]] = None,
  workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads">workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]</code> | workloads block. |

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads"></a>

```python
workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleAttachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads(
  workload_type: str,
  regex_name: str = None,
  workload_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName">regex_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName">workload_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `regex_name`<sup>Optional</sup> <a name="regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName"></a>

```python
regex_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `workload_name`<sup>Optional</sup> <a name="workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleConfig <a name="OceanRightSizingRuleConfig" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  recommendation_application_intervals: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]],
  rule_name: str,
  attach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]] = None,
  detach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]] = None,
  exclude_preliminary_recommendations: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ocean_id: str = None,
  recommendation_application_boundaries: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]] = None,
  recommendation_application_hpa: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]] = None,
  recommendation_application_min_threshold: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]] = None,
  recommendation_application_overhead_values: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]] = None,
  restart_replicas: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals">recommendation_application_intervals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]</code> | recommendation_application_intervals block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName">rule_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads">attach_workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]</code> | attach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads">detach_workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]</code> | detach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.excludePreliminaryRecommendations">exclude_preliminary_recommendations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId">ocean_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries">recommendation_application_boundaries</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]</code> | recommendation_application_boundaries block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationHpa">recommendation_application_hpa</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]</code> | recommendation_application_hpa block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold">recommendation_application_min_threshold</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]</code> | recommendation_application_min_threshold block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues">recommendation_application_overhead_values</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]</code> | recommendation_application_overhead_values block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartReplicas">restart_replicas</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `recommendation_application_intervals`<sup>Required</sup> <a name="recommendation_application_intervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals"></a>

```python
recommendation_application_intervals: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]

recommendation_application_intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_intervals OceanRightSizingRule#recommendation_application_intervals}

---

##### `rule_name`<sup>Required</sup> <a name="rule_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName"></a>

```python
rule_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}.

---

##### `attach_workloads`<sup>Optional</sup> <a name="attach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads"></a>

```python
attach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]

attach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#attach_workloads OceanRightSizingRule#attach_workloads}

---

##### `detach_workloads`<sup>Optional</sup> <a name="detach_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads"></a>

```python
detach_workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]

detach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#detach_workloads OceanRightSizingRule#detach_workloads}

---

##### `exclude_preliminary_recommendations`<sup>Optional</sup> <a name="exclude_preliminary_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.excludePreliminaryRecommendations"></a>

```python
exclude_preliminary_recommendations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocean_id`<sup>Optional</sup> <a name="ocean_id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId"></a>

```python
ocean_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}.

---

##### `recommendation_application_boundaries`<sup>Optional</sup> <a name="recommendation_application_boundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries"></a>

```python
recommendation_application_boundaries: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]

recommendation_application_boundaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_boundaries OceanRightSizingRule#recommendation_application_boundaries}

---

##### `recommendation_application_hpa`<sup>Optional</sup> <a name="recommendation_application_hpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationHpa"></a>

```python
recommendation_application_hpa: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]

recommendation_application_hpa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_hpa OceanRightSizingRule#recommendation_application_hpa}

---

##### `recommendation_application_min_threshold`<sup>Optional</sup> <a name="recommendation_application_min_threshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold"></a>

```python
recommendation_application_min_threshold: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]

recommendation_application_min_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_min_threshold OceanRightSizingRule#recommendation_application_min_threshold}

---

##### `recommendation_application_overhead_values`<sup>Optional</sup> <a name="recommendation_application_overhead_values" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues"></a>

```python
recommendation_application_overhead_values: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]

recommendation_application_overhead_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#recommendation_application_overhead_values OceanRightSizingRule#recommendation_application_overhead_values}

---

##### `restart_replicas`<sup>Optional</sup> <a name="restart_replicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartReplicas"></a>

```python
restart_replicas: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}.

---

### OceanRightSizingRuleDetachWorkloads <a name="OceanRightSizingRuleDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads(
  namespaces: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespaces]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces">namespaces</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]</code> | namespaces block. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces"></a>

```python
namespaces: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleDetachWorkloadsNamespaces <a name="OceanRightSizingRuleDetachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces(
  namespace_name: str,
  labels: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesLabels]] = None,
  workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName">namespace_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels">labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]</code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads">workloads</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]</code> | workloads block. |

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels"></a>

```python
labels: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads"></a>

```python
workloads: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleDetachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads(
  workload_type: str,
  regex_name: str = None,
  workload_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName">regex_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName">workload_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `regex_name`<sup>Optional</sup> <a name="regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName"></a>

```python
regex_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `workload_name`<sup>Optional</sup> <a name="workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleRecommendationApplicationBoundaries <a name="OceanRightSizingRuleRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries(
  cpu_max: typing.Union[int, float] = None,
  cpu_min: typing.Union[int, float] = None,
  memory_max: typing.Union[int, float] = None,
  memory_min: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax">cpu_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin">cpu_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax">memory_max</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin">memory_min</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}. |

---

##### `cpu_max`<sup>Optional</sup> <a name="cpu_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax"></a>

```python
cpu_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}.

---

##### `cpu_min`<sup>Optional</sup> <a name="cpu_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin"></a>

```python
cpu_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}.

---

##### `memory_max`<sup>Optional</sup> <a name="memory_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax"></a>

```python
memory_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}.

---

##### `memory_min`<sup>Optional</sup> <a name="memory_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin"></a>

```python
memory_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}.

---

### OceanRightSizingRuleRecommendationApplicationHpa <a name="OceanRightSizingRuleRecommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa(
  allow_hpa_recommendations: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.property.allowHpaRecommendations">allow_hpa_recommendations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#allow_hpa_recommendations OceanRightSizingRule#allow_hpa_recommendations}. |

---

##### `allow_hpa_recommendations`<sup>Optional</sup> <a name="allow_hpa_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.property.allowHpaRecommendations"></a>

```python
allow_hpa_recommendations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#allow_hpa_recommendations OceanRightSizingRule#allow_hpa_recommendations}.

---

### OceanRightSizingRuleRecommendationApplicationIntervals <a name="OceanRightSizingRuleRecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals(
  repetition_basis: str,
  monthly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]] = None,
  weekly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis">repetition_basis</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis">monthly_repetition_basis</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]</code> | monthly_repetition_basis block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis">weekly_repetition_basis</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]</code> | weekly_repetition_basis block. |

---

##### `repetition_basis`<sup>Required</sup> <a name="repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis"></a>

```python
repetition_basis: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}.

---

##### `monthly_repetition_basis`<sup>Optional</sup> <a name="monthly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis"></a>

```python
monthly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]

monthly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#monthly_repetition_basis OceanRightSizingRule#monthly_repetition_basis}

---

##### `weekly_repetition_basis`<sup>Optional</sup> <a name="weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis"></a>

```python
weekly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis(
  interval_months: typing.List[typing.Union[int, float]],
  week_of_the_month: typing.List[str],
  weekly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths">interval_months</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth">week_of_the_month</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis">weekly_repetition_basis</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]</code> | weekly_repetition_basis block. |

---

##### `interval_months`<sup>Required</sup> <a name="interval_months" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths"></a>

```python
interval_months: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}.

---

##### `week_of_the_month`<sup>Required</sup> <a name="week_of_the_month" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth"></a>

```python
week_of_the_month: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}.

---

##### `weekly_repetition_basis`<sup>Optional</sup> <a name="weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis"></a>

```python
weekly_repetition_basis: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis(
  interval_days: typing.List[str],
  interval_hours_end_time: str,
  interval_hours_start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays">interval_days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime">interval_hours_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime">interval_hours_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays"></a>

```python
interval_days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `interval_hours_end_time`<sup>Required</sup> <a name="interval_hours_end_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```python
interval_hours_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `interval_hours_start_time`<sup>Required</sup> <a name="interval_hours_start_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```python
interval_hours_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis(
  interval_days: typing.List[str],
  interval_hours_end_time: str,
  interval_hours_start_time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays">interval_days</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime">interval_hours_end_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime">interval_hours_start_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays"></a>

```python
interval_days: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `interval_hours_end_time`<sup>Required</sup> <a name="interval_hours_end_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```python
interval_hours_end_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `interval_hours_start_time`<sup>Required</sup> <a name="interval_hours_start_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```python
interval_hours_start_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationMinThreshold <a name="OceanRightSizingRuleRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold(
  cpu_percentage: typing.Union[int, float] = None,
  memory_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage">memory_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `cpu_percentage`<sup>Optional</sup> <a name="cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `memory_percentage`<sup>Optional</sup> <a name="memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage"></a>

```python
memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

### OceanRightSizingRuleRecommendationApplicationOverheadValues <a name="OceanRightSizingRuleRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues(
  cpu_percentage: typing.Union[int, float] = None,
  memory_percentage: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage">memory_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `cpu_percentage`<sup>Optional</sup> <a name="cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `memory_percentage`<sup>Optional</sup> <a name="memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage"></a>

```python
memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.215.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanRightSizingRuleAttachWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleAttachWorkloadsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleAttachWorkloadsNamespacesLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads">put_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads">reset_workloads</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]

---

##### `put_workloads` <a name="put_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```python
def put_workloads(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_workloads` <a name="reset_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```python
def reset_workloads() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads">workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput">workloads_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels"></a>

```python
labels: OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a>

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads"></a>

```python
workloads: OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>]]

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `workloads_input`<sup>Optional</sup> <a name="workloads_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```python
workloads_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleAttachWorkloadsNamespaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]]

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">reset_regex_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">reset_workload_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex_name` <a name="reset_regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```python
def reset_regex_name() -> None
```

##### `reset_workload_name` <a name="reset_workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```python
def reset_workload_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">regex_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">workload_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">regex_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">workload_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_name_input`<sup>Optional</sup> <a name="regex_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```python
regex_name_input: str
```

- *Type:* str

---

##### `workload_name_input`<sup>Optional</sup> <a name="workload_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```python
workload_name_input: str
```

- *Type:* str

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `regex_name`<sup>Required</sup> <a name="regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```python
regex_name: str
```

- *Type:* str

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>]

---


### OceanRightSizingRuleAttachWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces">put_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaces` <a name="put_namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces"></a>

```python
def put_namespaces(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces"></a>

```python
namespaces: OceanRightSizingRuleAttachWorkloadsNamespacesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a>

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleAttachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleAttachWorkloads]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>]

---


### OceanRightSizingRuleDetachWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleDetachWorkloadsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleDetachWorkloadsNamespacesLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels">put_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads">put_workloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads">reset_workloads</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_labels` <a name="put_labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels"></a>

```python
def put_labels(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]

---

##### `put_workloads` <a name="put_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```python
def put_workloads(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]

---

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_workloads` <a name="reset_workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```python
def reset_workloads() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads">workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput">namespace_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput">workloads_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName">namespace_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels"></a>

```python
labels: OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a>

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads"></a>

```python
workloads: OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>]]

---

##### `namespace_name_input`<sup>Optional</sup> <a name="namespace_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```python
namespace_name_input: str
```

- *Type:* str

---

##### `workloads_input`<sup>Optional</sup> <a name="workloads_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```python
workloads_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]

---

##### `namespace_name`<sup>Required</sup> <a name="namespace_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```python
namespace_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleDetachWorkloadsNamespaces]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]]

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">reset_regex_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">reset_workload_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex_name` <a name="reset_regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```python
def reset_regex_name() -> None
```

##### `reset_workload_name` <a name="reset_workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```python
def reset_workload_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">regex_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">workload_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">regex_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">workload_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_name_input`<sup>Optional</sup> <a name="regex_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```python
regex_name_input: str
```

- *Type:* str

---

##### `workload_name_input`<sup>Optional</sup> <a name="workload_name_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```python
workload_name_input: str
```

- *Type:* str

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `regex_name`<sup>Required</sup> <a name="regex_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```python
regex_name: str
```

- *Type:* str

---

##### `workload_name`<sup>Required</sup> <a name="workload_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```python
workload_name: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>]

---


### OceanRightSizingRuleDetachWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces">put_namespaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_namespaces` <a name="put_namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces"></a>

```python
def put_namespaces(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespaces]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput">namespaces_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces"></a>

```python
namespaces: OceanRightSizingRuleDetachWorkloadsNamespacesList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a>

---

##### `namespaces_input`<sup>Optional</sup> <a name="namespaces_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput"></a>

```python
namespaces_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleDetachWorkloadsNamespaces]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleDetachWorkloads]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>]

---


### OceanRightSizingRuleRecommendationApplicationBoundariesList <a name="OceanRightSizingRuleRecommendationApplicationBoundariesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationBoundaries]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]]

---


### OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax">reset_cpu_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin">reset_cpu_min</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax">reset_memory_max</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin">reset_memory_min</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_max` <a name="reset_cpu_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax"></a>

```python
def reset_cpu_max() -> None
```

##### `reset_cpu_min` <a name="reset_cpu_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin"></a>

```python
def reset_cpu_min() -> None
```

##### `reset_memory_max` <a name="reset_memory_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax"></a>

```python
def reset_memory_max() -> None
```

##### `reset_memory_min` <a name="reset_memory_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin"></a>

```python
def reset_memory_min() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput">cpu_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput">cpu_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput">memory_max_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput">memory_min_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax">cpu_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin">cpu_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax">memory_max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin">memory_min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_max_input`<sup>Optional</sup> <a name="cpu_max_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput"></a>

```python
cpu_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_min_input`<sup>Optional</sup> <a name="cpu_min_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput"></a>

```python
cpu_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_max_input`<sup>Optional</sup> <a name="memory_max_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput"></a>

```python
memory_max_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_min_input`<sup>Optional</sup> <a name="memory_min_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput"></a>

```python
memory_min_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_max`<sup>Required</sup> <a name="cpu_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax"></a>

```python
cpu_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_min`<sup>Required</sup> <a name="cpu_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin"></a>

```python
cpu_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_max`<sup>Required</sup> <a name="memory_max" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax"></a>

```python
memory_max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_min`<sup>Required</sup> <a name="memory_min" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin"></a>

```python
memory_min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationBoundaries]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>]

---


### OceanRightSizingRuleRecommendationApplicationHpaList <a name="OceanRightSizingRuleRecommendationApplicationHpaList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationHpaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationHpa]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]]

---


### OceanRightSizingRuleRecommendationApplicationHpaOutputReference <a name="OceanRightSizingRuleRecommendationApplicationHpaOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resetAllowHpaRecommendations">reset_allow_hpa_recommendations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_hpa_recommendations` <a name="reset_allow_hpa_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resetAllowHpaRecommendations"></a>

```python
def reset_allow_hpa_recommendations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendationsInput">allow_hpa_recommendations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendations">allow_hpa_recommendations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_hpa_recommendations_input`<sup>Optional</sup> <a name="allow_hpa_recommendations_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendationsInput"></a>

```python
allow_hpa_recommendations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_hpa_recommendations`<sup>Required</sup> <a name="allow_hpa_recommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendations"></a>

```python
allow_hpa_recommendations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationHpa]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis">put_weekly_repetition_basis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis">reset_weekly_repetition_basis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_weekly_repetition_basis` <a name="put_weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis"></a>

```python
def put_weekly_repetition_basis(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]

---

##### `reset_weekly_repetition_basis` <a name="reset_weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis"></a>

```python
def reset_weekly_repetition_basis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis">weekly_repetition_basis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput">interval_months_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput">weekly_repetition_basis_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput">week_of_the_month_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths">interval_months</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth">week_of_the_month</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weekly_repetition_basis`<sup>Required</sup> <a name="weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis"></a>

```python
weekly_repetition_basis: OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a>

---

##### `interval_months_input`<sup>Optional</sup> <a name="interval_months_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput"></a>

```python
interval_months_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `weekly_repetition_basis_input`<sup>Optional</sup> <a name="weekly_repetition_basis_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput"></a>

```python
weekly_repetition_basis_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]

---

##### `week_of_the_month_input`<sup>Optional</sup> <a name="week_of_the_month_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput"></a>

```python
week_of_the_month_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_months`<sup>Required</sup> <a name="interval_months" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths"></a>

```python
interval_months: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `week_of_the_month`<sup>Required</sup> <a name="week_of_the_month" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth"></a>

```python
week_of_the_month: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">interval_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">interval_hours_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">interval_hours_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays">interval_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">interval_hours_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">interval_hours_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_days_input`<sup>Optional</sup> <a name="interval_days_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```python
interval_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_hours_end_time_input`<sup>Optional</sup> <a name="interval_hours_end_time_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```python
interval_hours_end_time_input: str
```

- *Type:* str

---

##### `interval_hours_start_time_input`<sup>Optional</sup> <a name="interval_hours_start_time_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```python
interval_hours_start_time_input: str
```

- *Type:* str

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```python
interval_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_hours_end_time`<sup>Required</sup> <a name="interval_hours_end_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```python
interval_hours_end_time: str
```

- *Type:* str

---

##### `interval_hours_start_time`<sup>Required</sup> <a name="interval_hours_start_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```python
interval_hours_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis">put_monthly_repetition_basis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis">put_weekly_repetition_basis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis">reset_monthly_repetition_basis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis">reset_weekly_repetition_basis</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monthly_repetition_basis` <a name="put_monthly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis"></a>

```python
def put_monthly_repetition_basis(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]

---

##### `put_weekly_repetition_basis` <a name="put_weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis"></a>

```python
def put_weekly_repetition_basis(
  value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]

---

##### `reset_monthly_repetition_basis` <a name="reset_monthly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis"></a>

```python
def reset_monthly_repetition_basis() -> None
```

##### `reset_weekly_repetition_basis` <a name="reset_weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis"></a>

```python
def reset_weekly_repetition_basis() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis">monthly_repetition_basis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis">weekly_repetition_basis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput">monthly_repetition_basis_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput">repetition_basis_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput">weekly_repetition_basis_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis">repetition_basis</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monthly_repetition_basis`<sup>Required</sup> <a name="monthly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis"></a>

```python
monthly_repetition_basis: OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a>

---

##### `weekly_repetition_basis`<sup>Required</sup> <a name="weekly_repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis"></a>

```python
weekly_repetition_basis: OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a>

---

##### `monthly_repetition_basis_input`<sup>Optional</sup> <a name="monthly_repetition_basis_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput"></a>

```python
monthly_repetition_basis_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>]]

---

##### `repetition_basis_input`<sup>Optional</sup> <a name="repetition_basis_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput"></a>

```python
repetition_basis_input: str
```

- *Type:* str

---

##### `weekly_repetition_basis_input`<sup>Optional</sup> <a name="weekly_repetition_basis_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput"></a>

```python
weekly_repetition_basis_input: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]

---

##### `repetition_basis`<sup>Required</sup> <a name="repetition_basis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis"></a>

```python
repetition_basis: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationIntervals]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]]

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">interval_days_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">interval_hours_end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">interval_hours_start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays">interval_days</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">interval_hours_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">interval_hours_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `interval_days_input`<sup>Optional</sup> <a name="interval_days_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```python
interval_days_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_hours_end_time_input`<sup>Optional</sup> <a name="interval_hours_end_time_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```python
interval_hours_end_time_input: str
```

- *Type:* str

---

##### `interval_hours_start_time_input`<sup>Optional</sup> <a name="interval_hours_start_time_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```python
interval_hours_start_time_input: str
```

- *Type:* str

---

##### `interval_days`<sup>Required</sup> <a name="interval_days" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```python
interval_days: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interval_hours_end_time`<sup>Required</sup> <a name="interval_hours_end_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```python
interval_hours_end_time: str
```

- *Type:* str

---

##### `interval_hours_start_time`<sup>Required</sup> <a name="interval_hours_start_time" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```python
interval_hours_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>]

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdList <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationMinThreshold]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]]

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage">reset_cpu_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage">reset_memory_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_percentage` <a name="reset_cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage"></a>

```python
def reset_cpu_percentage() -> None
```

##### `reset_memory_percentage` <a name="reset_memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage"></a>

```python
def reset_memory_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput">cpu_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput">memory_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage">memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_percentage_input`<sup>Optional</sup> <a name="cpu_percentage_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput"></a>

```python
cpu_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_percentage_input`<sup>Optional</sup> <a name="memory_percentage_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput"></a>

```python
memory_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_percentage`<sup>Required</sup> <a name="cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_percentage`<sup>Required</sup> <a name="memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage"></a>

```python
memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationMinThreshold]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>]

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesList <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OceanRightSizingRuleRecommendationApplicationOverheadValues]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]]

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_spotinst import ocean_right_sizing_rule

oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage">reset_cpu_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage">reset_memory_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cpu_percentage` <a name="reset_cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage"></a>

```python
def reset_cpu_percentage() -> None
```

##### `reset_memory_percentage` <a name="reset_memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage"></a>

```python
def reset_memory_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput">cpu_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput">memory_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage">cpu_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage">memory_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_percentage_input`<sup>Optional</sup> <a name="cpu_percentage_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput"></a>

```python
cpu_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_percentage_input`<sup>Optional</sup> <a name="memory_percentage_input" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput"></a>

```python
memory_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cpu_percentage`<sup>Required</sup> <a name="cpu_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage"></a>

```python
cpu_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_percentage`<sup>Required</sup> <a name="memory_percentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage"></a>

```python
memory_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OceanRightSizingRuleRecommendationApplicationOverheadValues]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>]

---



