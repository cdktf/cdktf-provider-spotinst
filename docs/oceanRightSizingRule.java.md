# `oceanRightSizingRule` Submodule <a name="`oceanRightSizingRule` Submodule" id="@cdktf/provider-spotinst.oceanRightSizingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanRightSizingRule <a name="OceanRightSizingRule" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule spotinst_ocean_right_sizing_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRule;

OceanRightSizingRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .recommendationApplicationIntervals(IResolvable)
    .recommendationApplicationIntervals(java.util.List<OceanRightSizingRuleRecommendationApplicationIntervals>)
    .ruleName(java.lang.String)
//  .attachWorkloads(IResolvable)
//  .attachWorkloads(java.util.List<OceanRightSizingRuleAttachWorkloads>)
//  .detachWorkloads(IResolvable)
//  .detachWorkloads(java.util.List<OceanRightSizingRuleDetachWorkloads>)
//  .excludePreliminaryRecommendations(java.lang.Boolean)
//  .excludePreliminaryRecommendations(IResolvable)
//  .id(java.lang.String)
//  .oceanId(java.lang.String)
//  .recommendationApplicationBoundaries(IResolvable)
//  .recommendationApplicationBoundaries(java.util.List<OceanRightSizingRuleRecommendationApplicationBoundaries>)
//  .recommendationApplicationHpa(IResolvable)
//  .recommendationApplicationHpa(java.util.List<OceanRightSizingRuleRecommendationApplicationHpa>)
//  .recommendationApplicationMinThreshold(IResolvable)
//  .recommendationApplicationMinThreshold(java.util.List<OceanRightSizingRuleRecommendationApplicationMinThreshold>)
//  .recommendationApplicationOverheadValues(IResolvable)
//  .recommendationApplicationOverheadValues(java.util.List<OceanRightSizingRuleRecommendationApplicationOverheadValues>)
//  .restartReplicas(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationIntervals">recommendationApplicationIntervals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>></code> | recommendation_application_intervals block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.attachWorkloads">attachWorkloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>></code> | attach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.detachWorkloads">detachWorkloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>></code> | detach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.excludePreliminaryRecommendations">excludePreliminaryRecommendations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationBoundaries">recommendationApplicationBoundaries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>></code> | recommendation_application_boundaries block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationHpa">recommendationApplicationHpa</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>></code> | recommendation_application_hpa block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationMinThreshold">recommendationApplicationMinThreshold</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>></code> | recommendation_application_min_threshold block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationOverheadValues">recommendationApplicationOverheadValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>></code> | recommendation_application_overhead_values block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.restartReplicas">restartReplicas</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `recommendationApplicationIntervals`<sup>Required</sup> <a name="recommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationIntervals"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>>

recommendation_application_intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_intervals OceanRightSizingRule#recommendation_application_intervals}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.ruleName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}.

---

##### `attachWorkloads`<sup>Optional</sup> <a name="attachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.attachWorkloads"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>>

attach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#attach_workloads OceanRightSizingRule#attach_workloads}

---

##### `detachWorkloads`<sup>Optional</sup> <a name="detachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.detachWorkloads"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>>

detach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#detach_workloads OceanRightSizingRule#detach_workloads}

---

##### `excludePreliminaryRecommendations`<sup>Optional</sup> <a name="excludePreliminaryRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.excludePreliminaryRecommendations"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oceanId`<sup>Optional</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.oceanId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}.

---

##### `recommendationApplicationBoundaries`<sup>Optional</sup> <a name="recommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationBoundaries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>>

recommendation_application_boundaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_boundaries OceanRightSizingRule#recommendation_application_boundaries}

---

##### `recommendationApplicationHpa`<sup>Optional</sup> <a name="recommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationHpa"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>>

recommendation_application_hpa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_hpa OceanRightSizingRule#recommendation_application_hpa}

---

##### `recommendationApplicationMinThreshold`<sup>Optional</sup> <a name="recommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationMinThreshold"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>>

recommendation_application_min_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_min_threshold OceanRightSizingRule#recommendation_application_min_threshold}

---

##### `recommendationApplicationOverheadValues`<sup>Optional</sup> <a name="recommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.recommendationApplicationOverheadValues"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>>

recommendation_application_overhead_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_overhead_values OceanRightSizingRule#recommendation_application_overhead_values}

---

##### `restartReplicas`<sup>Optional</sup> <a name="restartReplicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.Initializer.parameter.restartReplicas"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads">putAttachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads">putDetachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries">putRecommendationApplicationBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa">putRecommendationApplicationHpa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals">putRecommendationApplicationIntervals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold">putRecommendationApplicationMinThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues">putRecommendationApplicationOverheadValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads">resetAttachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads">resetDetachWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetExcludePreliminaryRecommendations">resetExcludePreliminaryRecommendations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId">resetOceanId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries">resetRecommendationApplicationBoundaries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationHpa">resetRecommendationApplicationHpa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold">resetRecommendationApplicationMinThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues">resetRecommendationApplicationOverheadValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartReplicas">resetRestartReplicas</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttachWorkloads` <a name="putAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads"></a>

```java
public void putAttachWorkloads(IResolvable OR java.util.List<OceanRightSizingRuleAttachWorkloads> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putAttachWorkloads.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>>

---

##### `putDetachWorkloads` <a name="putDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads"></a>

```java
public void putDetachWorkloads(IResolvable OR java.util.List<OceanRightSizingRuleDetachWorkloads> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putDetachWorkloads.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>>

---

##### `putRecommendationApplicationBoundaries` <a name="putRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries"></a>

```java
public void putRecommendationApplicationBoundaries(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationBoundaries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationBoundaries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>>

---

##### `putRecommendationApplicationHpa` <a name="putRecommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa"></a>

```java
public void putRecommendationApplicationHpa(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationHpa> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationHpa.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>>

---

##### `putRecommendationApplicationIntervals` <a name="putRecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals"></a>

```java
public void putRecommendationApplicationIntervals(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationIntervals> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationIntervals.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>>

---

##### `putRecommendationApplicationMinThreshold` <a name="putRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold"></a>

```java
public void putRecommendationApplicationMinThreshold(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationMinThreshold> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationMinThreshold.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>>

---

##### `putRecommendationApplicationOverheadValues` <a name="putRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues"></a>

```java
public void putRecommendationApplicationOverheadValues(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationOverheadValues> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.putRecommendationApplicationOverheadValues.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>>

---

##### `resetAttachWorkloads` <a name="resetAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetAttachWorkloads"></a>

```java
public void resetAttachWorkloads()
```

##### `resetDetachWorkloads` <a name="resetDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetDetachWorkloads"></a>

```java
public void resetDetachWorkloads()
```

##### `resetExcludePreliminaryRecommendations` <a name="resetExcludePreliminaryRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetExcludePreliminaryRecommendations"></a>

```java
public void resetExcludePreliminaryRecommendations()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetId"></a>

```java
public void resetId()
```

##### `resetOceanId` <a name="resetOceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetOceanId"></a>

```java
public void resetOceanId()
```

##### `resetRecommendationApplicationBoundaries` <a name="resetRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationBoundaries"></a>

```java
public void resetRecommendationApplicationBoundaries()
```

##### `resetRecommendationApplicationHpa` <a name="resetRecommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationHpa"></a>

```java
public void resetRecommendationApplicationHpa()
```

##### `resetRecommendationApplicationMinThreshold` <a name="resetRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationMinThreshold"></a>

```java
public void resetRecommendationApplicationMinThreshold()
```

##### `resetRecommendationApplicationOverheadValues` <a name="resetRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRecommendationApplicationOverheadValues"></a>

```java
public void resetRecommendationApplicationOverheadValues()
```

##### `resetRestartReplicas` <a name="resetRestartReplicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.resetRestartReplicas"></a>

```java
public void resetRestartReplicas()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRule;

OceanRightSizingRule.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRule;

OceanRightSizingRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRule;

OceanRightSizingRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRule;

OceanRightSizingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OceanRightSizingRule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OceanRightSizingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OceanRightSizingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OceanRightSizingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OceanRightSizingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads">attachWorkloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads">detachWorkloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries">recommendationApplicationBoundaries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpa">recommendationApplicationHpa</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList">OceanRightSizingRuleRecommendationApplicationHpaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals">recommendationApplicationIntervals</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold">recommendationApplicationMinThreshold</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues">recommendationApplicationOverheadValues</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput">attachWorkloadsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput">detachWorkloadsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendationsInput">excludePreliminaryRecommendationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput">oceanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput">recommendationApplicationBoundariesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpaInput">recommendationApplicationHpaInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput">recommendationApplicationIntervalsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput">recommendationApplicationMinThresholdInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput">recommendationApplicationOverheadValuesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicasInput">restartReplicasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput">ruleNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendations">excludePreliminaryRecommendations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicas">restartReplicas</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attachWorkloads`<sup>Required</sup> <a name="attachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloads"></a>

```java
public OceanRightSizingRuleAttachWorkloadsList getAttachWorkloads();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList">OceanRightSizingRuleAttachWorkloadsList</a>

---

##### `detachWorkloads`<sup>Required</sup> <a name="detachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloads"></a>

```java
public OceanRightSizingRuleDetachWorkloadsList getDetachWorkloads();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList">OceanRightSizingRuleDetachWorkloadsList</a>

---

##### `recommendationApplicationBoundaries`<sup>Required</sup> <a name="recommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundaries"></a>

```java
public OceanRightSizingRuleRecommendationApplicationBoundariesList getRecommendationApplicationBoundaries();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList">OceanRightSizingRuleRecommendationApplicationBoundariesList</a>

---

##### `recommendationApplicationHpa`<sup>Required</sup> <a name="recommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpa"></a>

```java
public OceanRightSizingRuleRecommendationApplicationHpaList getRecommendationApplicationHpa();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList">OceanRightSizingRuleRecommendationApplicationHpaList</a>

---

##### `recommendationApplicationIntervals`<sup>Required</sup> <a name="recommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervals"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsList getRecommendationApplicationIntervals();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList">OceanRightSizingRuleRecommendationApplicationIntervalsList</a>

---

##### `recommendationApplicationMinThreshold`<sup>Required</sup> <a name="recommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThreshold"></a>

```java
public OceanRightSizingRuleRecommendationApplicationMinThresholdList getRecommendationApplicationMinThreshold();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList">OceanRightSizingRuleRecommendationApplicationMinThresholdList</a>

---

##### `recommendationApplicationOverheadValues`<sup>Required</sup> <a name="recommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValues"></a>

```java
public OceanRightSizingRuleRecommendationApplicationOverheadValuesList getRecommendationApplicationOverheadValues();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList">OceanRightSizingRuleRecommendationApplicationOverheadValuesList</a>

---

##### `attachWorkloadsInput`<sup>Optional</sup> <a name="attachWorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.attachWorkloadsInput"></a>

```java
public java.lang.Object getAttachWorkloadsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>>

---

##### `detachWorkloadsInput`<sup>Optional</sup> <a name="detachWorkloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.detachWorkloadsInput"></a>

```java
public java.lang.Object getDetachWorkloadsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>>

---

##### `excludePreliminaryRecommendationsInput`<sup>Optional</sup> <a name="excludePreliminaryRecommendationsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendationsInput"></a>

```java
public java.lang.Object getExcludePreliminaryRecommendationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `oceanIdInput`<sup>Optional</sup> <a name="oceanIdInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanIdInput"></a>

```java
public java.lang.String getOceanIdInput();
```

- *Type:* java.lang.String

---

##### `recommendationApplicationBoundariesInput`<sup>Optional</sup> <a name="recommendationApplicationBoundariesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationBoundariesInput"></a>

```java
public java.lang.Object getRecommendationApplicationBoundariesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>>

---

##### `recommendationApplicationHpaInput`<sup>Optional</sup> <a name="recommendationApplicationHpaInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationHpaInput"></a>

```java
public java.lang.Object getRecommendationApplicationHpaInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>>

---

##### `recommendationApplicationIntervalsInput`<sup>Optional</sup> <a name="recommendationApplicationIntervalsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationIntervalsInput"></a>

```java
public java.lang.Object getRecommendationApplicationIntervalsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>>

---

##### `recommendationApplicationMinThresholdInput`<sup>Optional</sup> <a name="recommendationApplicationMinThresholdInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationMinThresholdInput"></a>

```java
public java.lang.Object getRecommendationApplicationMinThresholdInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>>

---

##### `recommendationApplicationOverheadValuesInput`<sup>Optional</sup> <a name="recommendationApplicationOverheadValuesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.recommendationApplicationOverheadValuesInput"></a>

```java
public java.lang.Object getRecommendationApplicationOverheadValuesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>>

---

##### `restartReplicasInput`<sup>Optional</sup> <a name="restartReplicasInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicasInput"></a>

```java
public java.lang.String getRestartReplicasInput();
```

- *Type:* java.lang.String

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleNameInput"></a>

```java
public java.lang.String getRuleNameInput();
```

- *Type:* java.lang.String

---

##### `excludePreliminaryRecommendations`<sup>Required</sup> <a name="excludePreliminaryRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.excludePreliminaryRecommendations"></a>

```java
public java.lang.Object getExcludePreliminaryRecommendations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `oceanId`<sup>Required</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

---

##### `restartReplicas`<sup>Required</sup> <a name="restartReplicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.restartReplicas"></a>

```java
public java.lang.String getRestartReplicas();
```

- *Type:* java.lang.String

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanRightSizingRuleAttachWorkloads <a name="OceanRightSizingRuleAttachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloads;

OceanRightSizingRuleAttachWorkloads.builder()
    .namespaces(IResolvable)
    .namespaces(java.util.List<OceanRightSizingRuleAttachWorkloadsNamespaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces">namespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>></code> | namespaces block. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads.property.namespaces"></a>

```java
public java.lang.Object getNamespaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>>

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleAttachWorkloadsNamespaces <a name="OceanRightSizingRuleAttachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespaces;

OceanRightSizingRuleAttachWorkloadsNamespaces.builder()
    .namespaceName(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<OceanRightSizingRuleAttachWorkloadsNamespacesLabels>)
//  .workloads(IResolvable)
//  .workloads(java.util.List<OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads">workloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>></code> | workloads block. |

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces.property.workloads"></a>

```java
public java.lang.Object getWorkloads();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>>

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleAttachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels;

OceanRightSizingRuleAttachWorkloadsNamespacesLabels.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads;

OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.builder()
    .workloadType(java.lang.String)
//  .regexName(java.lang.String)
//  .workloadName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName">regexName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `regexName`<sup>Optional</sup> <a name="regexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.regexName"></a>

```java
public java.lang.String getRegexName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `workloadName`<sup>Optional</sup> <a name="workloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleConfig <a name="OceanRightSizingRuleConfig" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleConfig;

OceanRightSizingRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .recommendationApplicationIntervals(IResolvable)
    .recommendationApplicationIntervals(java.util.List<OceanRightSizingRuleRecommendationApplicationIntervals>)
    .ruleName(java.lang.String)
//  .attachWorkloads(IResolvable)
//  .attachWorkloads(java.util.List<OceanRightSizingRuleAttachWorkloads>)
//  .detachWorkloads(IResolvable)
//  .detachWorkloads(java.util.List<OceanRightSizingRuleDetachWorkloads>)
//  .excludePreliminaryRecommendations(java.lang.Boolean)
//  .excludePreliminaryRecommendations(IResolvable)
//  .id(java.lang.String)
//  .oceanId(java.lang.String)
//  .recommendationApplicationBoundaries(IResolvable)
//  .recommendationApplicationBoundaries(java.util.List<OceanRightSizingRuleRecommendationApplicationBoundaries>)
//  .recommendationApplicationHpa(IResolvable)
//  .recommendationApplicationHpa(java.util.List<OceanRightSizingRuleRecommendationApplicationHpa>)
//  .recommendationApplicationMinThreshold(IResolvable)
//  .recommendationApplicationMinThreshold(java.util.List<OceanRightSizingRuleRecommendationApplicationMinThreshold>)
//  .recommendationApplicationOverheadValues(IResolvable)
//  .recommendationApplicationOverheadValues(java.util.List<OceanRightSizingRuleRecommendationApplicationOverheadValues>)
//  .restartReplicas(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals">recommendationApplicationIntervals</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>></code> | recommendation_application_intervals block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName">ruleName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads">attachWorkloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>></code> | attach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads">detachWorkloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>></code> | detach_workloads block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.excludePreliminaryRecommendations">excludePreliminaryRecommendations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId">oceanId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries">recommendationApplicationBoundaries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>></code> | recommendation_application_boundaries block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationHpa">recommendationApplicationHpa</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>></code> | recommendation_application_hpa block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold">recommendationApplicationMinThreshold</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>></code> | recommendation_application_min_threshold block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues">recommendationApplicationOverheadValues</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>></code> | recommendation_application_overhead_values block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartReplicas">restartReplicas</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `recommendationApplicationIntervals`<sup>Required</sup> <a name="recommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationIntervals"></a>

```java
public java.lang.Object getRecommendationApplicationIntervals();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>>

recommendation_application_intervals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_intervals OceanRightSizingRule#recommendation_application_intervals}

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.ruleName"></a>

```java
public java.lang.String getRuleName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#rule_name OceanRightSizingRule#rule_name}.

---

##### `attachWorkloads`<sup>Optional</sup> <a name="attachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.attachWorkloads"></a>

```java
public java.lang.Object getAttachWorkloads();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>>

attach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#attach_workloads OceanRightSizingRule#attach_workloads}

---

##### `detachWorkloads`<sup>Optional</sup> <a name="detachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.detachWorkloads"></a>

```java
public java.lang.Object getDetachWorkloads();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>>

detach_workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#detach_workloads OceanRightSizingRule#detach_workloads}

---

##### `excludePreliminaryRecommendations`<sup>Optional</sup> <a name="excludePreliminaryRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.excludePreliminaryRecommendations"></a>

```java
public java.lang.Object getExcludePreliminaryRecommendations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#exclude_preliminary_recommendations OceanRightSizingRule#exclude_preliminary_recommendations}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#id OceanRightSizingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oceanId`<sup>Optional</sup> <a name="oceanId" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.oceanId"></a>

```java
public java.lang.String getOceanId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#ocean_id OceanRightSizingRule#ocean_id}.

---

##### `recommendationApplicationBoundaries`<sup>Optional</sup> <a name="recommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationBoundaries"></a>

```java
public java.lang.Object getRecommendationApplicationBoundaries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>>

recommendation_application_boundaries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_boundaries OceanRightSizingRule#recommendation_application_boundaries}

---

##### `recommendationApplicationHpa`<sup>Optional</sup> <a name="recommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationHpa"></a>

```java
public java.lang.Object getRecommendationApplicationHpa();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>>

recommendation_application_hpa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_hpa OceanRightSizingRule#recommendation_application_hpa}

---

##### `recommendationApplicationMinThreshold`<sup>Optional</sup> <a name="recommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationMinThreshold"></a>

```java
public java.lang.Object getRecommendationApplicationMinThreshold();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>>

recommendation_application_min_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_min_threshold OceanRightSizingRule#recommendation_application_min_threshold}

---

##### `recommendationApplicationOverheadValues`<sup>Optional</sup> <a name="recommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.recommendationApplicationOverheadValues"></a>

```java
public java.lang.Object getRecommendationApplicationOverheadValues();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>>

recommendation_application_overhead_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#recommendation_application_overhead_values OceanRightSizingRule#recommendation_application_overhead_values}

---

##### `restartReplicas`<sup>Optional</sup> <a name="restartReplicas" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleConfig.property.restartReplicas"></a>

```java
public java.lang.String getRestartReplicas();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#restart_replicas OceanRightSizingRule#restart_replicas}.

---

### OceanRightSizingRuleDetachWorkloads <a name="OceanRightSizingRuleDetachWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloads;

OceanRightSizingRuleDetachWorkloads.builder()
    .namespaces(IResolvable)
    .namespaces(java.util.List<OceanRightSizingRuleDetachWorkloadsNamespaces>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces">namespaces</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>></code> | namespaces block. |

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads.property.namespaces"></a>

```java
public java.lang.Object getNamespaces();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>>

namespaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespaces OceanRightSizingRule#namespaces}

---

### OceanRightSizingRuleDetachWorkloadsNamespaces <a name="OceanRightSizingRuleDetachWorkloadsNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespaces;

OceanRightSizingRuleDetachWorkloadsNamespaces.builder()
    .namespaceName(java.lang.String)
//  .labels(IResolvable)
//  .labels(java.util.List<OceanRightSizingRuleDetachWorkloadsNamespacesLabels>)
//  .workloads(IResolvable)
//  .workloads(java.util.List<OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>></code> | labels block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads">workloads</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>></code> | workloads block. |

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#namespace_name OceanRightSizingRule#namespace_name}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.labels"></a>

```java
public java.lang.Object getLabels();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>>

labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#labels OceanRightSizingRule#labels}

---

##### `workloads`<sup>Optional</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces.property.workloads"></a>

```java
public java.lang.Object getWorkloads();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>>

workloads block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workloads OceanRightSizingRule#workloads}

---

### OceanRightSizingRuleDetachWorkloadsNamespacesLabels <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels;

OceanRightSizingRuleDetachWorkloadsNamespacesLabels.builder()
    .key(java.lang.String)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#key OceanRightSizingRule#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#value OceanRightSizingRule#value}.

---

### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads;

OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.builder()
    .workloadType(java.lang.String)
//  .regexName(java.lang.String)
//  .workloadName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName">regexName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}. |

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_type OceanRightSizingRule#workload_type}.

---

##### `regexName`<sup>Optional</sup> <a name="regexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.regexName"></a>

```java
public java.lang.String getRegexName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#regex_name OceanRightSizingRule#regex_name}.

---

##### `workloadName`<sup>Optional</sup> <a name="workloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#workload_name OceanRightSizingRule#workload_name}.

---

### OceanRightSizingRuleRecommendationApplicationBoundaries <a name="OceanRightSizingRuleRecommendationApplicationBoundaries" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationBoundaries;

OceanRightSizingRuleRecommendationApplicationBoundaries.builder()
//  .cpuMax(java.lang.Number)
//  .cpuMin(java.lang.Number)
//  .memoryMax(java.lang.Number)
//  .memoryMin(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax">cpuMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin">cpuMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax">memoryMax</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin">memoryMin</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}. |

---

##### `cpuMax`<sup>Optional</sup> <a name="cpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMax"></a>

```java
public java.lang.Number getCpuMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_max OceanRightSizingRule#cpu_max}.

---

##### `cpuMin`<sup>Optional</sup> <a name="cpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.cpuMin"></a>

```java
public java.lang.Number getCpuMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_min OceanRightSizingRule#cpu_min}.

---

##### `memoryMax`<sup>Optional</sup> <a name="memoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMax"></a>

```java
public java.lang.Number getMemoryMax();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_max OceanRightSizingRule#memory_max}.

---

##### `memoryMin`<sup>Optional</sup> <a name="memoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries.property.memoryMin"></a>

```java
public java.lang.Number getMemoryMin();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_min OceanRightSizingRule#memory_min}.

---

### OceanRightSizingRuleRecommendationApplicationHpa <a name="OceanRightSizingRuleRecommendationApplicationHpa" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationHpa;

OceanRightSizingRuleRecommendationApplicationHpa.builder()
//  .allowHpaRecommendations(java.lang.Boolean)
//  .allowHpaRecommendations(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.property.allowHpaRecommendations">allowHpaRecommendations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#allow_hpa_recommendations OceanRightSizingRule#allow_hpa_recommendations}. |

---

##### `allowHpaRecommendations`<sup>Optional</sup> <a name="allowHpaRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa.property.allowHpaRecommendations"></a>

```java
public java.lang.Object getAllowHpaRecommendations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#allow_hpa_recommendations OceanRightSizingRule#allow_hpa_recommendations}.

---

### OceanRightSizingRuleRecommendationApplicationIntervals <a name="OceanRightSizingRuleRecommendationApplicationIntervals" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervals;

OceanRightSizingRuleRecommendationApplicationIntervals.builder()
    .repetitionBasis(java.lang.String)
//  .monthlyRepetitionBasis(IResolvable)
//  .monthlyRepetitionBasis(java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis>)
//  .weeklyRepetitionBasis(IResolvable)
//  .weeklyRepetitionBasis(java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis">repetitionBasis</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis">monthlyRepetitionBasis</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>></code> | monthly_repetition_basis block. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis">weeklyRepetitionBasis</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>></code> | weekly_repetition_basis block. |

---

##### `repetitionBasis`<sup>Required</sup> <a name="repetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.repetitionBasis"></a>

```java
public java.lang.String getRepetitionBasis();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#repetition_basis OceanRightSizingRule#repetition_basis}.

---

##### `monthlyRepetitionBasis`<sup>Optional</sup> <a name="monthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.monthlyRepetitionBasis"></a>

```java
public java.lang.Object getMonthlyRepetitionBasis();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>>

monthly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#monthly_repetition_basis OceanRightSizingRule#monthly_repetition_basis}

---

##### `weeklyRepetitionBasis`<sup>Optional</sup> <a name="weeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals.property.weeklyRepetitionBasis"></a>

```java
public java.lang.Object getWeeklyRepetitionBasis();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>>

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis;

OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.builder()
    .intervalMonths(java.util.List<java.lang.Number>)
    .weekOfTheMonth(java.util.List<java.lang.String>)
//  .weeklyRepetitionBasis(IResolvable)
//  .weeklyRepetitionBasis(java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths">intervalMonths</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth">weekOfTheMonth</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis">weeklyRepetitionBasis</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>></code> | weekly_repetition_basis block. |

---

##### `intervalMonths`<sup>Required</sup> <a name="intervalMonths" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.intervalMonths"></a>

```java
public java.util.List<java.lang.Number> getIntervalMonths();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_months OceanRightSizingRule#interval_months}.

---

##### `weekOfTheMonth`<sup>Required</sup> <a name="weekOfTheMonth" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weekOfTheMonth"></a>

```java
public java.util.List<java.lang.String> getWeekOfTheMonth();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#week_of_the_month OceanRightSizingRule#week_of_the_month}.

---

##### `weeklyRepetitionBasis`<sup>Optional</sup> <a name="weeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis.property.weeklyRepetitionBasis"></a>

```java
public java.lang.Object getWeeklyRepetitionBasis();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>>

weekly_repetition_basis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#weekly_repetition_basis OceanRightSizingRule#weekly_repetition_basis}

---

### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis;

OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.builder()
    .intervalDays(java.util.List<java.lang.String>)
    .intervalHoursEndTime(java.lang.String)
    .intervalHoursStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays">intervalDays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime">intervalHoursEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime">intervalHoursStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalDays"></a>

```java
public java.util.List<java.lang.String> getIntervalDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `intervalHoursEndTime`<sup>Required</sup> <a name="intervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```java
public java.lang.String getIntervalHoursEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `intervalHoursStartTime`<sup>Required</sup> <a name="intervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```java
public java.lang.String getIntervalHoursStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis;

OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.builder()
    .intervalDays(java.util.List<java.lang.String>)
    .intervalHoursEndTime(java.lang.String)
    .intervalHoursStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays">intervalDays</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime">intervalHoursEndTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime">intervalHoursStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}. |

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalDays"></a>

```java
public java.util.List<java.lang.String> getIntervalDays();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_days OceanRightSizingRule#interval_days}.

---

##### `intervalHoursEndTime`<sup>Required</sup> <a name="intervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursEndTime"></a>

```java
public java.lang.String getIntervalHoursEndTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_end_time OceanRightSizingRule#interval_hours_end_time}.

---

##### `intervalHoursStartTime`<sup>Required</sup> <a name="intervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis.property.intervalHoursStartTime"></a>

```java
public java.lang.String getIntervalHoursStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#interval_hours_start_time OceanRightSizingRule#interval_hours_start_time}.

---

### OceanRightSizingRuleRecommendationApplicationMinThreshold <a name="OceanRightSizingRuleRecommendationApplicationMinThreshold" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationMinThreshold;

OceanRightSizingRuleRecommendationApplicationMinThreshold.builder()
//  .cpuPercentage(java.lang.Number)
//  .memoryPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage">cpuPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage">memoryPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `cpuPercentage`<sup>Optional</sup> <a name="cpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.cpuPercentage"></a>

```java
public java.lang.Number getCpuPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `memoryPercentage`<sup>Optional</sup> <a name="memoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold.property.memoryPercentage"></a>

```java
public java.lang.Number getMemoryPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

### OceanRightSizingRuleRecommendationApplicationOverheadValues <a name="OceanRightSizingRuleRecommendationApplicationOverheadValues" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationOverheadValues;

OceanRightSizingRuleRecommendationApplicationOverheadValues.builder()
//  .cpuPercentage(java.lang.Number)
//  .memoryPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage">cpuPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage">memoryPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}. |

---

##### `cpuPercentage`<sup>Optional</sup> <a name="cpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.cpuPercentage"></a>

```java
public java.lang.Number getCpuPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#cpu_percentage OceanRightSizingRule#cpu_percentage}.

---

##### `memoryPercentage`<sup>Optional</sup> <a name="memoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues.property.memoryPercentage"></a>

```java
public java.lang.Number getMemoryPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.219.0/docs/resources/ocean_right_sizing_rule#memory_percentage OceanRightSizingRule#memory_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanRightSizingRuleAttachWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsList;

new OceanRightSizingRuleAttachWorkloadsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get"></a>

```java
public OceanRightSizingRuleAttachWorkloadsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList;

new OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference;

new OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesList;

new OceanRightSizingRuleAttachWorkloadsNamespacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference;

new OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads">putWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads">resetWorkloads</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<OceanRightSizingRuleAttachWorkloadsNamespacesLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>>

---

##### `putWorkloads` <a name="putWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```java
public void putWorkloads(IResolvable OR java.util.List<OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetWorkloads` <a name="resetWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```java
public void resetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads">workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput">workloadsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labels"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList">OceanRightSizingRuleAttachWorkloadsNamespacesLabelsList</a>

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloads"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList getWorkloads();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesLabels">OceanRightSizingRuleAttachWorkloadsNamespacesLabels</a>>

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `workloadsInput`<sup>Optional</sup> <a name="workloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```java
public java.lang.Object getWorkloadsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>>

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList;

new OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>>

---


### OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference;

new OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">resetRegexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">resetWorkloadName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegexName` <a name="resetRegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```java
public void resetRegexName()
```

##### `resetWorkloadName` <a name="resetWorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```java
public void resetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">regexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">workloadNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">regexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexNameInput`<sup>Optional</sup> <a name="regexNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```java
public java.lang.String getRegexNameInput();
```

- *Type:* java.lang.String

---

##### `workloadNameInput`<sup>Optional</sup> <a name="workloadNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```java
public java.lang.String getWorkloadNameInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `regexName`<sup>Required</sup> <a name="regexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```java
public java.lang.String getRegexName();
```

- *Type:* java.lang.String

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads">OceanRightSizingRuleAttachWorkloadsNamespacesWorkloads</a>

---


### OceanRightSizingRuleAttachWorkloadsOutputReference <a name="OceanRightSizingRuleAttachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleAttachWorkloadsOutputReference;

new OceanRightSizingRuleAttachWorkloadsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces">putNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaces` <a name="putNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces"></a>

```java
public void putNamespaces(IResolvable OR java.util.List<OceanRightSizingRuleAttachWorkloadsNamespaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespaces"></a>

```java
public OceanRightSizingRuleAttachWorkloadsNamespacesList getNamespaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespacesList">OceanRightSizingRuleAttachWorkloadsNamespacesList</a>

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.namespacesInput"></a>

```java
public java.lang.Object getNamespacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsNamespaces">OceanRightSizingRuleAttachWorkloadsNamespaces</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloadsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleAttachWorkloads">OceanRightSizingRuleAttachWorkloads</a>

---


### OceanRightSizingRuleDetachWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsList;

new OceanRightSizingRuleDetachWorkloadsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get"></a>

```java
public OceanRightSizingRuleDetachWorkloadsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList;

new OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference;

new OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesList;

new OceanRightSizingRuleDetachWorkloadsNamespacesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference;

new OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels">putLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads">putWorkloads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads">resetWorkloads</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLabels` <a name="putLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels"></a>

```java
public void putLabels(IResolvable OR java.util.List<OceanRightSizingRuleDetachWorkloadsNamespacesLabels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putLabels.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>>

---

##### `putWorkloads` <a name="putWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads"></a>

```java
public void putWorkloads(IResolvable OR java.util.List<OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.putWorkloads.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>>

---

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetWorkloads` <a name="resetWorkloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.resetWorkloads"></a>

```java
public void resetWorkloads()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads">workloads</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput">labelsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput">namespaceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput">workloadsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName">namespaceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labels"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList">OceanRightSizingRuleDetachWorkloadsNamespacesLabelsList</a>

---

##### `workloads`<sup>Required</sup> <a name="workloads" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloads"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList getWorkloads();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.labelsInput"></a>

```java
public java.lang.Object getLabelsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesLabels">OceanRightSizingRuleDetachWorkloadsNamespacesLabels</a>>

---

##### `namespaceNameInput`<sup>Optional</sup> <a name="namespaceNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceNameInput"></a>

```java
public java.lang.String getNamespaceNameInput();
```

- *Type:* java.lang.String

---

##### `workloadsInput`<sup>Optional</sup> <a name="workloadsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.workloadsInput"></a>

```java
public java.lang.Object getWorkloadsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>>

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.namespaceName"></a>

```java
public java.lang.String getNamespaceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList;

new OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>>

---


### OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference;

new OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName">resetRegexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName">resetWorkloadName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegexName` <a name="resetRegexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetRegexName"></a>

```java
public void resetRegexName()
```

##### `resetWorkloadName` <a name="resetWorkloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.resetWorkloadName"></a>

```java
public void resetWorkloadName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput">regexNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput">workloadNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput">workloadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName">regexName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName">workloadName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType">workloadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexNameInput`<sup>Optional</sup> <a name="regexNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexNameInput"></a>

```java
public java.lang.String getRegexNameInput();
```

- *Type:* java.lang.String

---

##### `workloadNameInput`<sup>Optional</sup> <a name="workloadNameInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadNameInput"></a>

```java
public java.lang.String getWorkloadNameInput();
```

- *Type:* java.lang.String

---

##### `workloadTypeInput`<sup>Optional</sup> <a name="workloadTypeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadTypeInput"></a>

```java
public java.lang.String getWorkloadTypeInput();
```

- *Type:* java.lang.String

---

##### `regexName`<sup>Required</sup> <a name="regexName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.regexName"></a>

```java
public java.lang.String getRegexName();
```

- *Type:* java.lang.String

---

##### `workloadName`<sup>Required</sup> <a name="workloadName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadName"></a>

```java
public java.lang.String getWorkloadName();
```

- *Type:* java.lang.String

---

##### `workloadType`<sup>Required</sup> <a name="workloadType" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.workloadType"></a>

```java
public java.lang.String getWorkloadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloadsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads">OceanRightSizingRuleDetachWorkloadsNamespacesWorkloads</a>

---


### OceanRightSizingRuleDetachWorkloadsOutputReference <a name="OceanRightSizingRuleDetachWorkloadsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleDetachWorkloadsOutputReference;

new OceanRightSizingRuleDetachWorkloadsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces">putNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNamespaces` <a name="putNamespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces"></a>

```java
public void putNamespaces(IResolvable OR java.util.List<OceanRightSizingRuleDetachWorkloadsNamespaces> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.putNamespaces.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces">namespaces</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput">namespacesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespaces"></a>

```java
public OceanRightSizingRuleDetachWorkloadsNamespacesList getNamespaces();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespacesList">OceanRightSizingRuleDetachWorkloadsNamespacesList</a>

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.namespacesInput"></a>

```java
public java.lang.Object getNamespacesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsNamespaces">OceanRightSizingRuleDetachWorkloadsNamespaces</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloadsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleDetachWorkloads">OceanRightSizingRuleDetachWorkloads</a>

---


### OceanRightSizingRuleRecommendationApplicationBoundariesList <a name="OceanRightSizingRuleRecommendationApplicationBoundariesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationBoundariesList;

new OceanRightSizingRuleRecommendationApplicationBoundariesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>>

---


### OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference;

new OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax">resetCpuMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin">resetCpuMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax">resetMemoryMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin">resetMemoryMin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuMax` <a name="resetCpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMax"></a>

```java
public void resetCpuMax()
```

##### `resetCpuMin` <a name="resetCpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetCpuMin"></a>

```java
public void resetCpuMin()
```

##### `resetMemoryMax` <a name="resetMemoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMax"></a>

```java
public void resetMemoryMax()
```

##### `resetMemoryMin` <a name="resetMemoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.resetMemoryMin"></a>

```java
public void resetMemoryMin()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput">cpuMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput">cpuMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput">memoryMaxInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput">memoryMinInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax">cpuMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin">cpuMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax">memoryMax</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin">memoryMin</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuMaxInput`<sup>Optional</sup> <a name="cpuMaxInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMaxInput"></a>

```java
public java.lang.Number getCpuMaxInput();
```

- *Type:* java.lang.Number

---

##### `cpuMinInput`<sup>Optional</sup> <a name="cpuMinInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMinInput"></a>

```java
public java.lang.Number getCpuMinInput();
```

- *Type:* java.lang.Number

---

##### `memoryMaxInput`<sup>Optional</sup> <a name="memoryMaxInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMaxInput"></a>

```java
public java.lang.Number getMemoryMaxInput();
```

- *Type:* java.lang.Number

---

##### `memoryMinInput`<sup>Optional</sup> <a name="memoryMinInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMinInput"></a>

```java
public java.lang.Number getMemoryMinInput();
```

- *Type:* java.lang.Number

---

##### `cpuMax`<sup>Required</sup> <a name="cpuMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMax"></a>

```java
public java.lang.Number getCpuMax();
```

- *Type:* java.lang.Number

---

##### `cpuMin`<sup>Required</sup> <a name="cpuMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.cpuMin"></a>

```java
public java.lang.Number getCpuMin();
```

- *Type:* java.lang.Number

---

##### `memoryMax`<sup>Required</sup> <a name="memoryMax" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMax"></a>

```java
public java.lang.Number getMemoryMax();
```

- *Type:* java.lang.Number

---

##### `memoryMin`<sup>Required</sup> <a name="memoryMin" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.memoryMin"></a>

```java
public java.lang.Number getMemoryMin();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundariesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationBoundaries">OceanRightSizingRuleRecommendationApplicationBoundaries</a>

---


### OceanRightSizingRuleRecommendationApplicationHpaList <a name="OceanRightSizingRuleRecommendationApplicationHpaList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationHpaList;

new OceanRightSizingRuleRecommendationApplicationHpaList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationHpaOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>>

---


### OceanRightSizingRuleRecommendationApplicationHpaOutputReference <a name="OceanRightSizingRuleRecommendationApplicationHpaOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference;

new OceanRightSizingRuleRecommendationApplicationHpaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resetAllowHpaRecommendations">resetAllowHpaRecommendations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowHpaRecommendations` <a name="resetAllowHpaRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.resetAllowHpaRecommendations"></a>

```java
public void resetAllowHpaRecommendations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendationsInput">allowHpaRecommendationsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendations">allowHpaRecommendations</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowHpaRecommendationsInput`<sup>Optional</sup> <a name="allowHpaRecommendationsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendationsInput"></a>

```java
public java.lang.Object getAllowHpaRecommendationsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowHpaRecommendations`<sup>Required</sup> <a name="allowHpaRecommendations" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.allowHpaRecommendations"></a>

```java
public java.lang.Object getAllowHpaRecommendations();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpaOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationHpa">OceanRightSizingRuleRecommendationApplicationHpa</a>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsList;

new OceanRightSizingRuleRecommendationApplicationIntervalsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis">putWeeklyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis">resetWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWeeklyRepetitionBasis` <a name="putWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis"></a>

```java
public void putWeeklyRepetitionBasis(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>>

---

##### `resetWeeklyRepetitionBasis` <a name="resetWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.resetWeeklyRepetitionBasis"></a>

```java
public void resetWeeklyRepetitionBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis">weeklyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput">intervalMonthsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput">weeklyRepetitionBasisInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput">weekOfTheMonthInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths">intervalMonths</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth">weekOfTheMonth</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weeklyRepetitionBasis`<sup>Required</sup> <a name="weeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasis"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList getWeeklyRepetitionBasis();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList</a>

---

##### `intervalMonthsInput`<sup>Optional</sup> <a name="intervalMonthsInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonthsInput"></a>

```java
public java.util.List<java.lang.Number> getIntervalMonthsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `weeklyRepetitionBasisInput`<sup>Optional</sup> <a name="weeklyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weeklyRepetitionBasisInput"></a>

```java
public java.lang.Object getWeeklyRepetitionBasisInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>>

---

##### `weekOfTheMonthInput`<sup>Optional</sup> <a name="weekOfTheMonthInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonthInput"></a>

```java
public java.util.List<java.lang.String> getWeekOfTheMonthInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalMonths`<sup>Required</sup> <a name="intervalMonths" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.intervalMonths"></a>

```java
public java.util.List<java.lang.Number> getIntervalMonths();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `weekOfTheMonth`<sup>Required</sup> <a name="weekOfTheMonth" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.weekOfTheMonth"></a>

```java
public java.util.List<java.lang.String> getWeekOfTheMonth();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference;

new OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">intervalDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">intervalHoursEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">intervalHoursStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays">intervalDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">intervalHoursEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">intervalHoursStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalDaysInput`<sup>Optional</sup> <a name="intervalDaysInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```java
public java.util.List<java.lang.String> getIntervalDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalHoursEndTimeInput`<sup>Optional</sup> <a name="intervalHoursEndTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```java
public java.lang.String getIntervalHoursEndTimeInput();
```

- *Type:* java.lang.String

---

##### `intervalHoursStartTimeInput`<sup>Optional</sup> <a name="intervalHoursStartTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```java
public java.lang.String getIntervalHoursStartTimeInput();
```

- *Type:* java.lang.String

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```java
public java.util.List<java.lang.String> getIntervalDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalHoursEndTime`<sup>Required</sup> <a name="intervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```java
public java.lang.String getIntervalHoursEndTime();
```

- *Type:* java.lang.String

---

##### `intervalHoursStartTime`<sup>Required</sup> <a name="intervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```java
public java.lang.String getIntervalHoursStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisWeeklyRepetitionBasis</a>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference;

new OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis">putMonthlyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis">putWeeklyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis">resetMonthlyRepetitionBasis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis">resetWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMonthlyRepetitionBasis` <a name="putMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis"></a>

```java
public void putMonthlyRepetitionBasis(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putMonthlyRepetitionBasis.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>>

---

##### `putWeeklyRepetitionBasis` <a name="putWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis"></a>

```java
public void putWeeklyRepetitionBasis(IResolvable OR java.util.List<OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.putWeeklyRepetitionBasis.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>>

---

##### `resetMonthlyRepetitionBasis` <a name="resetMonthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetMonthlyRepetitionBasis"></a>

```java
public void resetMonthlyRepetitionBasis()
```

##### `resetWeeklyRepetitionBasis` <a name="resetWeeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.resetWeeklyRepetitionBasis"></a>

```java
public void resetWeeklyRepetitionBasis()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis">monthlyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis">weeklyRepetitionBasis</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput">monthlyRepetitionBasisInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput">repetitionBasisInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput">weeklyRepetitionBasisInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis">repetitionBasis</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `monthlyRepetitionBasis`<sup>Required</sup> <a name="monthlyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasis"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList getMonthlyRepetitionBasis();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasisList</a>

---

##### `weeklyRepetitionBasis`<sup>Required</sup> <a name="weeklyRepetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasis"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList getWeeklyRepetitionBasis();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList</a>

---

##### `monthlyRepetitionBasisInput`<sup>Optional</sup> <a name="monthlyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.monthlyRepetitionBasisInput"></a>

```java
public java.lang.Object getMonthlyRepetitionBasisInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsMonthlyRepetitionBasis</a>>

---

##### `repetitionBasisInput`<sup>Optional</sup> <a name="repetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasisInput"></a>

```java
public java.lang.String getRepetitionBasisInput();
```

- *Type:* java.lang.String

---

##### `weeklyRepetitionBasisInput`<sup>Optional</sup> <a name="weeklyRepetitionBasisInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.weeklyRepetitionBasisInput"></a>

```java
public java.lang.Object getWeeklyRepetitionBasisInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>>

---

##### `repetitionBasis`<sup>Required</sup> <a name="repetitionBasis" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.repetitionBasis"></a>

```java
public java.lang.String getRepetitionBasis();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervals">OceanRightSizingRuleRecommendationApplicationIntervals</a>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList;

new OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>>

---


### OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference <a name="OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference;

new OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput">intervalDaysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput">intervalHoursEndTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput">intervalHoursStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays">intervalDays</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime">intervalHoursEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime">intervalHoursStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `intervalDaysInput`<sup>Optional</sup> <a name="intervalDaysInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDaysInput"></a>

```java
public java.util.List<java.lang.String> getIntervalDaysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalHoursEndTimeInput`<sup>Optional</sup> <a name="intervalHoursEndTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTimeInput"></a>

```java
public java.lang.String getIntervalHoursEndTimeInput();
```

- *Type:* java.lang.String

---

##### `intervalHoursStartTimeInput`<sup>Optional</sup> <a name="intervalHoursStartTimeInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTimeInput"></a>

```java
public java.lang.String getIntervalHoursStartTimeInput();
```

- *Type:* java.lang.String

---

##### `intervalDays`<sup>Required</sup> <a name="intervalDays" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalDays"></a>

```java
public java.util.List<java.lang.String> getIntervalDays();
```

- *Type:* java.util.List<java.lang.String>

---

##### `intervalHoursEndTime`<sup>Required</sup> <a name="intervalHoursEndTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursEndTime"></a>

```java
public java.lang.String getIntervalHoursEndTime();
```

- *Type:* java.lang.String

---

##### `intervalHoursStartTime`<sup>Required</sup> <a name="intervalHoursStartTime" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.intervalHoursStartTime"></a>

```java
public java.lang.String getIntervalHoursStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasisOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis">OceanRightSizingRuleRecommendationApplicationIntervalsWeeklyRepetitionBasis</a>

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdList <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationMinThresholdList;

new OceanRightSizingRuleRecommendationApplicationMinThresholdList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>>

---


### OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference <a name="OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference;

new OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage">resetCpuPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage">resetMemoryPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPercentage` <a name="resetCpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetCpuPercentage"></a>

```java
public void resetCpuPercentage()
```

##### `resetMemoryPercentage` <a name="resetMemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.resetMemoryPercentage"></a>

```java
public void resetMemoryPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput">cpuPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput">memoryPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage">cpuPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage">memoryPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPercentageInput`<sup>Optional</sup> <a name="cpuPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentageInput"></a>

```java
public java.lang.Number getCpuPercentageInput();
```

- *Type:* java.lang.Number

---

##### `memoryPercentageInput`<sup>Optional</sup> <a name="memoryPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentageInput"></a>

```java
public java.lang.Number getMemoryPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.cpuPercentage"></a>

```java
public java.lang.Number getCpuPercentage();
```

- *Type:* java.lang.Number

---

##### `memoryPercentage`<sup>Required</sup> <a name="memoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.memoryPercentage"></a>

```java
public java.lang.Number getMemoryPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThresholdOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationMinThreshold">OceanRightSizingRuleRecommendationApplicationMinThreshold</a>

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesList <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesList" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList;

new OceanRightSizingRuleRecommendationApplicationOverheadValuesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get"></a>

```java
public OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>>

---


### OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference <a name="OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_right_sizing_rule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference;

new OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage">resetCpuPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage">resetMemoryPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuPercentage` <a name="resetCpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetCpuPercentage"></a>

```java
public void resetCpuPercentage()
```

##### `resetMemoryPercentage` <a name="resetMemoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.resetMemoryPercentage"></a>

```java
public void resetMemoryPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput">cpuPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput">memoryPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage">cpuPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage">memoryPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cpuPercentageInput`<sup>Optional</sup> <a name="cpuPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentageInput"></a>

```java
public java.lang.Number getCpuPercentageInput();
```

- *Type:* java.lang.Number

---

##### `memoryPercentageInput`<sup>Optional</sup> <a name="memoryPercentageInput" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentageInput"></a>

```java
public java.lang.Number getMemoryPercentageInput();
```

- *Type:* java.lang.Number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.cpuPercentage"></a>

```java
public java.lang.Number getCpuPercentage();
```

- *Type:* java.lang.Number

---

##### `memoryPercentage`<sup>Required</sup> <a name="memoryPercentage" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.memoryPercentage"></a>

```java
public java.lang.Number getMemoryPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValuesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanRightSizingRule.OceanRightSizingRuleRecommendationApplicationOverheadValues">OceanRightSizingRuleRecommendationApplicationOverheadValues</a>

---



